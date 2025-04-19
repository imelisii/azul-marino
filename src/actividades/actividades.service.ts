import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ActividadesService extends PrismaClient {
  create(createActividadeDto: CreateActividadeDto) {
    const { nombre, descripcion, precio, activa } = createActividadeDto;
    return this.actividades.create({
      data: {
        nombre,
        descripcion,
        precio,
        activa
      }

    })
  }

  findAll() {
    return this.actividades.findMany({})
  }

  async findOne(id: number) {
    const actividad = await this.actividades.findUnique({
      where: {
        id: id
      }
    });
    if (!actividad) {
      throw new BadRequestException(`Actividad no encontrada con id ${id}`);
    }
    return actividad;
  }

  async update(id: number, updateActividadeDto: UpdateActividadeDto) {
    const updatedActitvity = await this.actividades.update({
      where: {
        id: id
      },
      data: updateActividadeDto
    })
    if (!updatedActitvity) {
      throw new BadRequestException(`Actividad no encontrada con id ${id}`);
    }
    return updatedActitvity;
  }

  async remove(id: number) {

    const deletedActitvity = await this.actividades
      .update({
        where: {
          id: id
        },

        data: {
          activa: false

        }
      })
    if (!deletedActitvity) {
      throw new BadRequestException(`Actividad no encontrada con id ${id}`);
    }
    return deletedActitvity;
  }
}
