import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';


@Injectable()
export class SeedService extends PrismaClient {
  private executed: boolean = false;




  async create() {

    if (this.executed === true) {
      return new BadRequestException('Ya se han ejecutado los seeds')
    }





    await this.$queryRaw`
  -- Insertar familias
INSERT INTO FAMILIAS (nombre_familia, fecha_alta)
VALUES 
('Familia Pérez', GETDATE()),
('Familia González', GETDATE());

-- Insertar socios
INSERT INTO SOCIOS (id_familia, nombre, apellido, dni, fecha_nacimiento, celular, activo)
VALUES 
(1, 'Juan', 'Pérez', '12345678', '1990-05-15', '1123456789', 1),
(1, 'María', 'Pérez', '87654321', '1992-08-20', '1123456790', 1),
(2, 'Carlos', 'González', '22334455', '1985-01-10', '1123456791', 1);

-- Insertar actividades
INSERT INTO ACTIVIDADES (nombre, descripcion, precio, activa)
VALUES 
('Fútbol', 'Entrenamiento de fútbol para todas las edades.', 1500.00, 1),
('Natación', 'Clases de natación para niños y adultos.', 2000.00, 1);

-- Insertar inscripciones
INSERT INTO INSCRIPCIONES (id_socio, id_actividad, fecha_inscripcion, monto)
VALUES 
(1, 1, GETDATE(), 1500),
(2, 2, GETDATE(), 2000);

-- Insertar saldos
INSERT INTO SALDOS (id_socio, pagado, fecha_pago, descripcion, monto, fecha, medioDePago)
VALUES 
(1, 1, GETDATE(), 'Pago de cuota fútbol', 1500.00, GETDATE(), 'Efectivo'),
(2, 0, NULL, 'Pendiente de pago natación', 2000.00, GETDATE(), NULL);

-- Insertar en caja
INSERT INTO CAJA (tipoMovimiento, cuenta, medioPago, fecha, monto, descripcion)
VALUES 
('Ingreso', 'Caja Principal', 'Efectivo', GETDATE(), 1500.00, 'Cobro de cuota fútbol');

-- Insertar carnets
INSERT INTO CARNET (id_socio, id_actividad, fecha, fecha_vto)
VALUES 
(1, 1, GETDATE(), DATEADD(YEAR, 1, GETDATE())),
(2, 2, GETDATE(), DATEADD(YEAR, 1, GETDATE()));

  `
    this.executed = true;


    return 'Se han ejecutado los seeds correctamente';



  }


}
