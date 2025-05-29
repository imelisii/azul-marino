import { IsNumber, IsString } from "class-validator";

export class CobrarDeudaDto {
    @IsNumber()
    socioId: number;
    @IsNumber()
    monto: number;
    @IsNumber()
    idDeuda: number;
    @IsString()
    descripcion: string;
}