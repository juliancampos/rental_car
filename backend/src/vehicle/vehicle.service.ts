import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Vehicle } from '@prisma/client';

@Injectable()
export class VehicleService {
    @Inject()
    private readonly prisma: PrismaService

    async create(data: Prisma.VehicleCreateInput) {
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
            throw new Error('Vehicle already exists');
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

    async update(params: {
        id: number,
        data: Prisma.VehicleUpdateInput
    }): Promise<Vehicle> {
        return await this.prisma.vehicle.update({
            where: { id : params.id },
            data: params.data
        })
    }

    async delete(where: Prisma.VehicleWhereUniqueInput): Promise<Vehicle> {
        return this.prisma.vehicle.delete({ where })
    }

}   
