import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SociosModule } from './socios/socios.module';
import { ActividadesModule } from './actividades/actividades.module';
import { CobrosModule } from './cobros/cobros.module';
import { SeedModule } from './seed/seed.module';
import { PrinterModule } from './printer/printer.module';
import { CajaModule } from './caja/caja.module';


@Module({
  imports: [SociosModule, ActividadesModule, CobrosModule, SeedModule, PrinterModule, CajaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
