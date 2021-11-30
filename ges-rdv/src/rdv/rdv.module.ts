import { Module } from '@nestjs/common';
import { RdvController } from './rdv.controller';
import { RdvService } from './rdv.service';

@Module({
  controllers: [RdvController],
  providers: [
    {provide: RdvService, useClass: RdvService}
  ]
})
export class RdvModule {}
