import { Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class SociosService extends PrismaClient {
  create(createSocioDto: CreateSocioDto) {
    return 'This action adds a new socio';
  }

  findAll() {
    return this.socios.findMany({})
  }

  findOne(id: number) {
    return this.socios.findUnique({
      where: { id },
      include:{
        familias:true,
        inscripciones:true,
        saldos:true,
      }
    })
  }

  update(id: number, updateSocioDto: UpdateSocioDto) {
    return `This action updates a #${id} socio`;
  }

  remove(id: number) {
    return `This action removes a #${id} socio`;
  }
}
