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

    @IsString()
    direccion: string;

    @IsString()
    @IsOptional()
    localidad?: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    madre?: string;

    @IsString()
    @IsOptional()
    telefono_madre?: string;

    @IsString()
    @IsOptional()
    padre?: string;

    @IsString()
    @IsOptional()
    telefono_padre?: string;

    @IsString()
    @IsOptional()
    mail?: string;

    @IsOptional()
    @IsString()
    familiar:string


}
