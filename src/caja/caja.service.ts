import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { PrismaClient } from 'generated/prisma';
import { FechasDto } from './dto/fechas.dto';
import { ingresoCajaDto } from './dto/ingreso-caja.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class CajaService extends PrismaClient {

  constructor(private readonly authSerivce: AuthService) {
    super();
  }


  async create(claveCaja: ingresoCajaDto) {

    const usuario = await this.usuario.findUnique({
      where: {
        password: claveCaja.clave,
        username: claveCaja.usuario,
      }
    })

    if (!usuario?.id)  throw new BadRequestException(`Usuario o clave incorrectos`);

    return {
      user: usuario,
      token: this.authSerivce.getJWT({ id: usuario.id }),
    }
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
