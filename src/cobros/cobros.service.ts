import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';
import { Carnet, PrismaClient } from 'generated/prisma';
import { PrinterService } from 'src/printer/printer.service';
import { WhatsappService } from 'src/whatsapp/whatsapp.service';
import { CobrarDeudaDto } from './dto/cobrar-deuda.dto';


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
          id_socio: socioId,
          fecha_inscripcion: this.getUTCDate(),
        }
      })

      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: `PAGA cuota de ${actividad?.nombre} socio: ${socio?.nombre}`,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
          fecha: this.getUTCDate(),  
        }
      })
      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: this.getUTCDate(),
          fecha_vto: (() => {
            const vto = this.getUTCDate();
            vto.setDate(vto.getDate() + 30);
            return vto;
          })()
        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      // this.whatsappService.sendCarnet(socio?.celular!, pdf)





      return `Se ha creado la cobranza de ${monto} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
    })
  }

  async PagoPartes(createCobranzaDto: CreateCobroDto) {
    const { actividadId, metodoPago, monto, socioId, aCuentaDe, metodoPago2 } = createCobranzaDto;
    const actividad = await this.actividades.findUnique({ where: { id: actividadId } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    const resto = Number(actividad?.precio) - monto

    return this.$transaction(async (prisma) => {
      await prisma.inscripciones.create({
        data: {
          monto,
          id_actividad: actividadId,
          id_socio: socioId,
          fecha_inscripcion: this.getUTCDate(),
        }
      })
      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
          fecha: this.getUTCDate(),
        }
      })
      await prisma.caja.create({
        data: {
          monto: resto,
          medioPago: metodoPago2!,
          descripcion: actividad?.descripcion!,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
          fecha: this.getUTCDate(),
        }
      })
      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: this.getUTCDate(),
          fecha_vto: (() => {
            const vto = this.getUTCDate();
            vto.setDate(vto.getDate() + 30);
            return vto;
          })()
        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      // this.whatsappService.sendCarnet(socio?.celular!, pdf)



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
          id_socio: socioId,
          fecha_inscripcion: this.getUTCDate(),
        }
      })

      await prisma.caja.create({
        data: {
          monto,
          medioPago: metodoPago,
          descripcion: `PAGA parte de cuota de ${actividad?.nombre} socio: ${socio?.nombre}`,
          tipoMovimiento: 'INGRESO',
          cuenta: aCuentaDe,
          fecha: this.getUTCDate(),
        }
      })

      await prisma.saldos.create({
        data: {
          id_socio: socioId,
          descripcion: `Debe parte de cuota de ${actividad?.descripcion}`,
          monto: resto,
          fecha: this.getUTCDate(),
        }
      })

      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: this.getUTCDate(),
          fecha_vto: (() => {
            const vto = this.getUTCDate();
            vto.setDate(vto.getDate() + 30);
            return vto;
          })()
        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      // this.whatsappService.sendCarnet(socio?.celular!, pdf)
      // this.whatsappService.sendMessage(`Hola ${socio?.nombre}, se ha creado la cobranza  en la actividad ${actividad?.nombre}, adeuda ${resto} de la cuota`, socio?.celular! )





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
          id_socio: socioId,
          fecha_inscripcion: this.getUTCDate(),
        }
      })

      await prisma.saldos.create({
        data: {
          id_socio: socioId,
          descripcion: `Debe actividad: ${actividad?.descripcion}`,
          monto: Number(actividad?.precio),
          fecha: this.getUTCDate(),
        }
      })

      await prisma.caja.create({
        data: {
          monto: -Number(actividad?.precio!),
          medioPago: '',
          descripcion: actividad?.descripcion!,
          tipoMovimiento: `DEUDA Socio: ${socio?.nombre}`,
          cuenta: '',
          fecha: this.getUTCDate(),
        }
      })

      await prisma.carnet.create({
        data: {
          id_socio: socioId,
          id_actividad: actividadId,
          fecha: this.getUTCDate(),
          fecha_vto: (() => {
            const vto = this.getUTCDate();
            vto.setDate(vto.getDate() + 30);
            return vto;
          })()
        }
      })



      const pdf = await this.printerService.createProfessionalCarnet({
        nombreApellido: socio?.nombre!,
        actividad: actividad?.descripcion!,
        cantidadClases: "8",
        vencimiento: '12/12/2028',
      })

      // this.whatsappService.sendCarnet(socio?.celular!, pdf)
      // this.whatsappService.sendMessage(`Hola ${socio?.nombre}, se ha creado la cobranza  en la actividad ${actividad?.nombre}, adeuda ${actividad?.precio} de la cuota`, socio?.celular! )
    })
    return `Se genero la deuda de ${actividad?.precio} para el socio ${socio?.nombre} en la actividad ${actividad?.descripcion}`;
  }

  async cobrarDeuda(cobrarDedua: CobrarDeudaDto) {
    const { socioId, monto, idDeuda, descripcion } = cobrarDedua;
    const deuda = await this.saldos.findUnique({ where: { id: idDeuda } })
    const socio = await this.socios.findUnique({ where: { id: socioId } })

    if (monto === deuda?.monto) {
      await this.$executeRaw`EXEC cobrarDeuda @IdDeuda = ${idDeuda}, @Descripcion = ${descripcion}`;
      return await this.caja.create({
        data: {
          monto: Number(monto),
          medioPago: '',
          descripcion: `PAGO DEUDA SOCIO: ${socio?.nombre}`,
          tipoMovimiento: `INGRESO`,
          cuenta: '',
          fecha: this.getUTCDate(),
        }
      })
    }

    await this.saldos.update({
      where: { id: idDeuda },
      data: {
        monto: deuda?.monto! - monto,
        descripcion: `Se pago ${monto} de la deuda el ${this.getUTCDate().toLocaleDateString("es-AR")}, queda un saldo de ${deuda?.monto! - monto} - ${descripcion}`,
        fecha_pago: this.getUTCDate(),
      }
    })
    await this.caja.create({
      data: {
        monto: Number(monto),
        medioPago: '',
        descripcion: descripcion ?? '',
        tipoMovimiento: ` PAGO PARCIAL DEUDA Socio: ${socio?.nombre}`,
        cuenta: '',
        fecha: this.getUTCDate(),
      }
    })
    return `Se pago ${monto} de la deuda del socio ${socio?.nombre}, queda un saldo de ${deuda?.monto! - monto}`


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


  private getUTCDate(): Date {
    return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
}

}
