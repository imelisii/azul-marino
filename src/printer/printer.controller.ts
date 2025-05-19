import { Controller, Get, Res } from '@nestjs/common';
import { PrinterService } from './printer.service';
import { Response } from 'express';


@Controller('reports')
export class PrinterController {
  constructor(private readonly printerService: PrinterService) { }

  // Endpoint para generar y devolver el PDF
  @Get('generate-pdf')
  async generatePdf(@Res() res: Response) {
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="documento.pdf"',
    });


    const doc = await this.printerService.createProfessionalCarnet({
      nombreApellido: 'Juan Perez',
      actividad: 'Yoga',
      cantidadClases: '10',
      vencimiento: '2023-12-31',
    });
    res.send(Buffer.from(doc));
  }
}
