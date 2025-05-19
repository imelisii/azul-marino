import { IsInt, IsString, IsNumber, IsOptional } from 'class-validator';


export class CreateCobroDto {
  @IsInt()
  socioId: number;

  @IsInt()
  actividadId: number;

  @IsString()
  metodoPago: string;

  @IsOptional()
  @IsString()
  metodoPago2?: string;

  @IsString()
  @IsOptional()
  aCuentaDe?: string;

  @IsNumber()
  monto: number;
}
