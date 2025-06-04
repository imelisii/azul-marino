import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class SociosService extends PrismaClient {
  async create(createSocioDto: CreateSocioDto) {
    const { id_familia, nombre, apellido, dni, fecha_nacimiento, celular, direccion, localidad, telefono, madre, padre, telefono_madre, telefono_padre, mail } = createSocioDto;

    const existeSocio = await this.socios.findFirst({
      where: { dni }
    })


    if (existeSocio) throw new BadRequestException(`El socio con el DNI ${dni} ya existe`)


    return this.$transaction(async (prisma) => {
      const idFamilia = id_familia ? id_familia : (await prisma.familias.create({
        data: {
          nombre_familia: `Familia ${apellido}`,

        },

      })).id;


      const newSocio = await prisma.socios.create({
        data: {
          id_familia: idFamilia,
          nombre,
          apellido,
          dni,
          fecha_nacimiento,
          celular,
          direccion,
          localidad,
          telefono,
          madre,
          telefono_madre,
          padre,
          telefono_padre,
          mail,
        }
      })
      return newSocio
    }

    )









  }

  findAll() {
    return this.socios.findMany({})
  }

  async findOne(id: number) {
    const socio = await this.socios.findUnique({
      where: { id },
      select: {
        nombre: true,
        apellido: true,
        dni: true,
        celular: true,
        direccion: true,
        localidad: true,
        telefono: true,
        madre: true,
        telefono_madre: true,
        padre: true,
        telefono_padre: true,
        mail: true,
        saldos: {
          where: { pagado: false },
          select: {
            id: true,
            monto: true,
            descripcion: true,
            fecha: true,
            pagado: true,
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
      nombre: socio?.nombre,
      apellido: socio?.apellido,
      dni: socio?.dni,
      direccion: socio?.direccion,
      localidad: socio?.localidad,
      telefono: socio?.telefono,
      madre: socio?.madre,
      telefono_madre: socio?.telefono_madre,
      padre: socio?.padre,
      telefono_padre: socio?.telefono_padre,
      mail: socio?.mail,
      celular: socio?.celular,
      saldos: socio?.saldos,
      inscripciones: inscripcionesPlanas,
      deudas: socio?.saldos.reduce((acc, saldo) => acc + saldo.monto, 0),
    };
  }



  update(id: number, updateSocioDto: UpdateSocioDto) {
    return `This action updates a #${id} socio`;
  }

  remove(id: number) {
    return `This action removes a #${id} socio`;
  }
}
