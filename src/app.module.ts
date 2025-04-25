import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SociosModule } from './socios/socios.module';
import { ActividadesModule } from './actividades/actividades.module';
import { CobrosModule } from './cobros/cobros.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [SociosModule, ActividadesModule, CobrosModule, WhatsappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
