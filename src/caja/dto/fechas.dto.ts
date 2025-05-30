import { IsDateString } from "class-validator";

export class FechasDto {

    @IsDateString()
    fecha_inicio: Date;

    @IsDateString()
    fecha_fin: Date;
}