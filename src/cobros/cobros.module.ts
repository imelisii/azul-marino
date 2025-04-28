import { Module } from '@nestjs/common';
import { CobrosService } from './cobros.service';
import { CobrosController } from './cobros.controller';
import { WhatsappModule } from 'src/whatsapp/whatsapp.module';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  controllers: [CobrosController],
  providers: [CobrosService],
  imports: [PrinterModule, WhatsappModule],
})
export class CobrosModule {}
