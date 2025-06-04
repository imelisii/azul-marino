import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { FechasDto } from './dto/fechas.dto';
import { ingresoCajaDto } from './dto/ingreso-caja.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Controller('caja')
export class CajaController {
  constructor(private readonly cajaService: CajaService) { }

  @Post()
  create(@Body() claveCaja: ingresoCajaDto) {
    return this.cajaService.create(claveCaja);
  }

  @Get()
  @Auth(ValidRoles.admin)
  findAll(@Query() fechas: FechasDto) {
    return this.cajaService.findAll(fechas);
  }

  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.cajaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCajaDto: UpdateCajaDto) {
    return this.cajaService.update(+id, updateCajaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cajaService.remove(+id);
  }
}
