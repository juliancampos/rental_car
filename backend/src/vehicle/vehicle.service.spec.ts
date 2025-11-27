import { VehicleService } from "./vehicle.service";
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from "../database/prisma.service";
import { Prisma } from "@prisma/client";

describe('VehicleService', () => {
  let service : VehicleService;

  const vehicleData: Prisma.VehicleCreateInput = {
      placa: 'ABC1234',
      chassi: '1HGBH41JXMN109186',
      renavam: '12345678901',
      modelo: 'Model X',
      marca: 'Brand Y',
      ano: '2020'
    };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehicleService, {
          provide: PrismaService,
          useValue: {
            vehicle: {
              findMany: jest.fn().mockResolvedValue([]),
              create: jest.fn().mockResolvedValue(vehicleData),
              update: jest.fn(),
            }
          }
        }
      ],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a vehicle', async () => {    
    const vehicle = await service.create(vehicleData);
    expect(vehicle).toBeDefined();
    expect(vehicle.placa).toBe(vehicleData.placa);
  });

  it('should not create a vehicle that already exists', async () => {
    const prismaService = new PrismaService();
    jest.spyOn(prismaService.vehicle, 'findMany').mockResolvedValueOnce([vehicleData as any]);

    await expect(service.create(vehicleData)).rejects.toThrow('Vehicle already exists');
  });
});