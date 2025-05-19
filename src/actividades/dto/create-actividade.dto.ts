import { IsBoolean, IsNumber, isNumber, IsString } from 'class-validator';


export class CreateActividadeDto {

    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsNumber()
    precio: number;

    @IsBoolean()
    activa: boolean;

}
