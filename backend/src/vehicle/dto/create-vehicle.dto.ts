import { IsString, IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateVehicleDto {
  @Length(8)
  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  chassi: string;

  @MinLength(9)
  @IsString()
  @IsNotEmpty()
  renavam: string;

  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  marca: string;

  @Length(4)
  @IsString()
  @IsNotEmpty()
  ano: string;
}