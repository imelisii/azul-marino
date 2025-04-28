import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';
import { Carnet, PrismaClient } from 'generated/prisma';
import { PrinterService } from 'src/printer/printer.service';
import { WhatsappService } from 'src/whatsapp/whatsapp.service';


@Injectable()
export class CobrosService extends PrismaClient {

  constructor(
    private readonly printerService: PrinterService,
    private readonly whatsappService: WhatsappService,

  ) {
    super()
  }

  async pago(createCobroDto: CreateCobroDto) {
    const { socioId, actividadId, metodoPago, aCuentaDe, monto } = createCobroDto;

    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })
    const carnet = await this.carnet.findFirst({ where: { id_socio: socioId }, orderBy: { fecha: 'desc' } })

    // if (carnet) {
    //   this.validarCarnetVto(carnet)
    // }

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


      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: new Date(),
          fecha_vto: new Date(new Date().setDate(new Date().getDate() + 30))

        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      this.whatsappService.sendCarnet(socio?.celular!, pdf)





      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })
  }

  async PagoPartes(createCobranzaDto: CreateCobroDto) {
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

      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: new Date(),
          fecha_vto: new Date(new Date().setDate(new Date().getDate() + 30))

        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      this.whatsappService.sendCarnet(socio?.celular!, pdf)



      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })

  }


  async pagoParte(createCobroDto: CreateCobroDto) {
    const { actividadId, metodoPago, monto, socioId, aCuentaDe } = createCobroDto;
    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    const resto = Number(actividad?.precio) - monto

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
          monto: resto,
          medioDePago: metodoPago,
        }
      })


      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: new Date(),
          fecha_vto: new Date(new Date().setDate(new Date().getDate() + 30))

        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      this.whatsappService.sendCarnet(socio?.celular!, pdf)
      this.whatsappService.sendMessage(`Hola ${socio?.nombre}, se ha creado la cobranza  en la actividad ${actividad?.nombre}, adeuda ${resto} de la cuota`, socio?.celular! )





      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })
  }



  async noPagaNada(createCobroDto: CreateCobroDto) {
    const { actividadId, socioId } = createCobroDto;
    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    await this.$transaction(async (prisma) => {
      await prisma.inscripciones.create({
        data: {
          monto: 0,
          id_actividad: actividadId,
          id_socio: socioId
        }
      })

      await prisma.saldos.create({
        data: {
          id_socio: socioId,
          descripcion: `Debe actividad: ${actividad?.descripcion}`,
          monto: Number(actividad?.precio),
        }
      })

      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: new Date(),
          fecha_vto: new Date(new Date().setDate(new Date().getDate() + 30))

        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      this.whatsappService.sendCarnet(socio?.celular!, pdf)
      this.whatsappService.sendMessage(`Hola ${socio?.nombre}, se ha creado la cobranza  en la actividad ${actividad?.nombre}, adeuda ${actividad?.precio} de la cuota`, socio?.celular! )

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

  private validarCarnetVto(carnet: Carnet) {
    if (carnet.fecha_vto > new Date()) {
      throw new BadRequestException(`El socio tiene el carnet vigente hasta ${carnet.fecha_vto}`)
    }

  }




}
