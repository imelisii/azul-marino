import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';
import { PrismaClient } from 'generated/prisma';
import { inscripciones } from '../../generated/prisma/index';
import { WhatsappService } from 'src/whatsapp/whatsapp.service';

@Injectable()
export class CobrosService extends PrismaClient {


  constructor( ) {
    super()
  }



  async create(createCobroDto: CreateCobroDto) {
    const { socioId, actividadId, metodoPago, aCuentaDe, monto } = createCobroDto;

    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })


    if (!actividad) return new BadRequestException(`No existe la actividad con id ${actividadId}`)


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
          descripcion: actividad.descripcion ?? '',
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
        }
      })



      //await this.WhatsappService.sendMessage(`Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad.descripcion}`, socio?.celular!)

      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad.descripcion}`;

      

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
