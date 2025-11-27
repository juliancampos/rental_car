import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Prisma, Vehicle } from '@prisma/client';

@Controller('vehicle')
export class VehicleController {
    @Inject()
    private readonly vehicleService: VehicleService
    
    @Post()
    async create(@Body() vehicleData: Prisma.VehicleCreateInput): Promise<Vehicle> {
        return await this.vehicleService.create(vehicleData)
    }

    @Get()
    async findAll(): Promise<Vehicle[]> {
        return await this.vehicleService.findAll({})
    }

    @Put(':id')
    async udate(
        @Param('id') id: number,
        @Body() body:Prisma.VehicleUpdateInput
    ): Promise<Vehicle> {
        return await this.vehicleService.update({
            id: Number(id),
            data: body
        })
    }

    @Delete(':id')
    async delete(@Param('id') id: Prisma.VehicleWhereUniqueInput): Promise<Vehicle> {
        return await this.vehicleService.delete(id)
    }
}
