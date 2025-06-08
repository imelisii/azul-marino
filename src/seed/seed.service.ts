import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class SeedService extends PrismaClient {
  private executed: boolean = false;




  async create() {

    if (this.executed === true) {
      return new BadRequestException('Ya se han ejecutado los seeds')
    }

    await this.$executeRawUnsafe(`
  -- Insertar usuario admin
INSERT INTO "Usuario" (username, password, email, nombre, apellido, rol, activo)
VALUES ('admin', 'admin123', 'admin@azulmarino.com', 'Admin', 'Principal', 'admin', true)
ON CONFLICT (username) DO NOTHING;

    `)
    this.executed = true;


    return 'Se han ejecutado los seeds correctamente';



  }


}
