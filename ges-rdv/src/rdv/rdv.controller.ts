import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RdvService } from './rdv.service';
import { Rdv } from '../entities/rdv';
@Controller('rdv')
export class RdvController {
    constructor(private readonly rdvService: RdvService){}

    @Get()
    findAll(): any[] {
        return this.rdvService.rdvList();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.rdvService.findOne(id);
    }

    @Post()
    createRdv(@Body() newRdv){
        this.rdvService.create(newRdv);
    }
    @Patch(':id')
    updateRdv(@Param('id') id: string, @Body() rd: Rdv){
        return this.rdvService.update(id, rd);
    }
    @Delete(':id')
    deleteRdv(@Param('id') id: string){
        return this.rdvService.delete(id);
    }
}
