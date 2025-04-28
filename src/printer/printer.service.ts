import { Injectable } from '@nestjs/common';
import { jsPDF } from 'jspdf';
import * as QRCode from 'qrcode';
import * as fs from 'fs';




interface CarnetData {
  nombreApellido: string;
  actividad: string;
  cantidadClases: string;
  vencimiento: string;

}




@Injectable()
export class PrinterService {
  private base64Logo: string; 
  
  constructor() {

    this.base64Logo = this.loadLogo(); 
      
  }

  private loadLogo(): string {
    try {
      const logo = fs.readFileSync('src/assets/logo_sin_fondo.png');
      return Buffer.from(logo).toString('base64');
    } catch (error) {
      throw new Error('Failed to load logo: ' + error.message);
    }
  }






  async createProfessionalCarnet(carnetData: CarnetData): Promise<ArrayBuffer> {
    const { nombreApellido, actividad, cantidadClases, vencimiento } = carnetData;
    
    
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a6'
    });





  
    const primaryColor = '#2c3e50'; 
    const secondaryColor = '#3498db'; 
    const accentColor = '#e74c3c';   
 

    doc.setFillColor(236, 240, 241); 
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');


    doc.addImage(this.base64Logo, 'PNG', 2, 2, 30, 30);

   
    doc.setFontSize(25);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.text('Carnet de socio', 55, 20);



    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.text('Nombre:', 1, 30);
    doc.text('Actividad:', 1, 40);
    doc.text('Clases:', 1, 50);
    doc.text('Vencimiento:', 1, 60);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(nombreApellido, 30, 30);
    doc.text(actividad, 35, 40);
    doc.text(cantidadClases, 25, 50);
    doc.text(vencimiento, 40, 60);

   
    const qrData = `${nombreApellido}|${actividad}|${cantidadClases}|${vencimiento}`;
    const qrImage = await QRCode.toDataURL(qrData, { errorCorrectionLevel: 'H', margin: 1, width: 50 });

    doc.addImage(qrImage, 'PNG', 50, 65, 25, 25);

    
    doc.setFillColor(secondaryColor);
    doc.rect(0, doc.internal.pageSize.getHeight() - 10, doc.internal.pageSize.getWidth(), 10, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text('Carnet válido solo con documento de identidad', doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 5, { align: 'center' });


    return doc.output('arraybuffer');
  }

}
