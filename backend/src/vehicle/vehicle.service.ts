import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Vehicle } from '@prisma/client';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
    @Inject()
    private readonly prisma: PrismaService

    async create(data: CreateVehicleDto) {
        const vehicleExists = await this.prisma.vehicle.findMany({
            where: {
                OR: [
                    { placa: data.placa },
                    { chassi: data.chassi },
                    { renavam: data.renavam } 
                ],
            }
        });

        if (vehicleExists.length > 0) {
            throw new InternalServerErrorException('Vehicle already exists');
        }

        return await this.prisma.vehicle.create({ data });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.VehicleWhereUniqueInput;
        where?: Prisma.VehicleWhereInput;
        orderBy?: Prisma.VehicleOrderByWithRelationInput;
    }): Promise<Vehicle[]> {
        const {
            skip,
            take,
            cursor,
            where,
            orderBy
        } = params;

        return await this.prisma.vehicle.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async update(params: { id: number, data: UpdateVehicleDto }): Promise<Vehicle> {
        return await this.prisma.vehicle.update({
            where: { id : params.id },
            data: params.data
        })
    }

    async delete(id: number): Promise<Vehicle> {
        return this.prisma.vehicle.delete({ where: { id } })
    }
}   
