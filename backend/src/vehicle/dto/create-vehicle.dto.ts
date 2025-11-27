import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateVehicleDto {
  @Length(8)
  @IsString()
  @IsNotEmpty()
  placa: string;

  @Length(10)
  @IsString()
  @IsNotEmpty()
  chassi: string;

  @Length(10)
  @IsString()
  @IsNotEmpty()
  renavam: string;

  @Length(30)
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @Length(10)
  @IsString()
  @IsNotEmpty()
  marca: string;

  @Length(10)
  @IsString()
  @IsNotEmpty()
  ano: string;
}