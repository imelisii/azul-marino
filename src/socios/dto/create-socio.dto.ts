import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSocioDto {

    @IsNumber()
    @IsOptional()
    id_familia: number;


    @IsString()
    nombre: string;


    @IsString()
    apellido: string;



    @IsString()
    dni: string;

    @IsDateString()
    fecha_nacimiento: Date;


    @IsString()
    celular: string;




}
