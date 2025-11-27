import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Prisma, Vehicle } from '@prisma/client';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
    @Inject()
    private readonly vehicleService: VehicleService
    
    @Post()
    async create(@Body(new ValidationPipe()) createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
        return await this.vehicleService.create(createVehicleDto)
    }

    @Get()
    async findAll(): Promise<Vehicle[]> {
        return await this.vehicleService.findAll({})
    }

    @Put(':id')
    async udate(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
        @Body() body: UpdateVehicleDto
    ): Promise<Vehicle> {
        return await this.vehicleService.update({
            id,
            data: body
        })
    }

    @Delete(':id')
    async delete(@Param('id') id: Prisma.VehicleWhereUniqueInput): Promise<Vehicle> {
        return await this.vehicleService.delete(id)
    }
}
