import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CobrosService } from './cobros.service';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { UpdateCobroDto } from './dto/update-cobro.dto';

@Controller('cobros')
export class CobrosController {
  constructor(private readonly cobrosService: CobrosService) { }
  @Get()
  findAll() {
    return this.cobrosService.findAll();
  }

  @Post()
  create(@Body() createCobroDto: CreateCobroDto) {
    return this.cobrosService.pago(createCobroDto);
  }
  @Post('/partes')
  createCobro(@Body() createCobroDto: CreateCobroDto) {
   return this.cobrosService.PagoPartes(createCobroDto);

  }

  @Post("/parte")
  createCobroParte(@Body() createCobroDto: CreateCobroDto) {
   return this.cobrosService.pagoParte(createCobroDto);

  }

  @Post('/no-paga-nada')
  createCobroNoPagaNada(@Body() createCobroDto: CreateCobroDto) {
    return this.cobrosService.noPagaNada(createCobroDto);

  }





  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cobrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCobroDto: UpdateCobroDto) {
    return this.cobrosService.update(+id, updateCobroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cobrosService.remove(+id);
  }
}
