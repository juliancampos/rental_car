import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    VehicleModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
