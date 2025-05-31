import { Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { PrismaClient } from 'generated/prisma';
import { FechasDto } from './dto/fechas.dto';

@Injectable()
export class CajaService extends PrismaClient {
  create(createCajaDto: CreateCajaDto) {
    return 'This action adds a new caja';
  }

  async findAll(fechas: FechasDto) {
    const caja = await this.caja.findMany({
      where: {
        fecha: {
          gte: fechas.fecha_inicio,
          lte: fechas.fecha_fin,
        },
      }
    });

    return {
      caja,
      total: caja.reduce((acc, item) => acc + item.monto, 0),
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} caja`;
  }

  update(id: number, updateCajaDto: UpdateCajaDto) {
    return `This action updates a #${id} caja`;
  }

  remove(id: number) {
    return `This action removes a #${id} caja`;
  }

  async getClaveCaja() {
    return 
  }
}
