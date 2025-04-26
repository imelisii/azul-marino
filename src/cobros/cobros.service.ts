import { Injectable } from '@nestjs/common';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class CobrosService extends PrismaClient {

  constructor() {
    super()
  }

  async create(createCobroDto: CreateCobroDto) {
    const { socioId, actividadId, metodoPago, aCuentaDe, monto } = createCobroDto;

    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    return this.$transaction(async (prisma) => {
      await prisma.inscripciones.create({
        data: {
          monto,
          id_actividad: actividadId,
          id_socio: socioId
        }
      })

      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
        }
      })
      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })
  }

  async cobroPartes(createCobranzaDto: CreateCobroDto) {
    const { actividadId, metodoPago, monto, socioId, aCuentaDe, metodoPago2 } = createCobranzaDto;
    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    return this.$transaction(async (prisma) => {
      await prisma.inscripciones.create({
        data: {
          monto,
          id_actividad: actividadId,
          id_socio: socioId
        }
      })

      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
        }
      })
      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago2!,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
        }
      })
      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })

  }


  async cobroPagaParte(createCobroDto: CreateCobroDto) {
    const { actividadId, metodoPago, monto, socioId, aCuentaDe } = createCobroDto;
    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    return this.$transaction(async (prisma) => {
      await prisma.inscripciones.create({
        data: {
          monto,
          id_actividad: actividadId,
          id_socio: socioId
        }
      })

      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
        }
      })

      await prisma.saldos.create({
        data: {
          id_socio: socioId,
          descripcion: `Debe parte de cuota de ${actividad?.descripcion}`,
          monto: Number(actividad?.precio) - monto,
          medioDePago: metodoPago,
        }
      })



      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })
  }


  findAll() {
    return `This action returns all cobros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cobro`;
  }

  update(id: number, updateCobroDto: UpdateCobroDto) {
    return `This action updates a #${id} cobro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cobro`;
  }
}
