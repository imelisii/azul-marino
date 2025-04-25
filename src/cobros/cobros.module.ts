import { Module } from '@nestjs/common';
import { CobrosService } from './cobros.service';
import { CobrosController } from './cobros.controller';
import { WhatsappModule } from 'src/whatsapp/whatsapp.module';

@Module({
  controllers: [CobrosController],
  providers: [CobrosService],
  imports: [],
})
export class CobrosModule {}
