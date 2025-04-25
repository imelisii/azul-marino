import { Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { PrismaClient } from 'generated/prisma';
import { actividades, inscripciones } from '../../generated/prisma/index';

@Injectable()
export class SociosService extends PrismaClient {
  create(createSocioDto: CreateSocioDto) {
    return 'This action adds a new socio';
  }

  findAll() {
    return this.socios.findMany({})
  }

  async findOne(id: number) {
    const socio = await this.socios.findUnique({
      where: { id },
      select: {
        saldos: {
          select: {
            id: true,
            monto: true,
            descripcion: true,
            fecha: true,
            tipo_movimiento: true,
          },
        },
        inscripciones: {
          select: {
            id: true,
            fecha_inscripcion: true,
            monto: true,
            actividades: {
              select: {
                id: true,
                nombre: true,
                descripcion: true,
              },
            },
          },
        },
      },
    });

    const inscripcionesPlanas = socio?.inscripciones.map(insc => ({
      id: insc.id,
      actividadId: insc.actividades?.id,
      nombre: insc.actividades?.nombre,
      descripcion: insc.actividades?.descripcion,
      fecha: insc.fecha_inscripcion,
      monto: insc.monto,
      
    }));

    return {
      saldos: socio?.saldos,
      inscripciones: inscripcionesPlanas,
    };
  }



  update(id: number, updateSocioDto: UpdateSocioDto) {
    return `This action updates a #${id} socio`;
  }

  remove(id: number) {
    return `This action removes a #${id} socio`;
  }
}
