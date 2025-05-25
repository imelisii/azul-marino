import { IsBoolean, IsNumber, isNumber, IsOptional, IsString } from 'class-validator';


export class CreateActividadeDto {

    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    precio: number;

    @IsBoolean()
    activa: boolean;

}
