import { IsString } from "class-validator";

export class ingresoCajaDto {
    @IsString()
    clave: string;
    @IsString()
    usuario: string;


}