import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SociosModule } from './socios/socios.module';
import { ActividadesModule } from './actividades/actividades.module';

@Module({
  imports: [SociosModule, ActividadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
