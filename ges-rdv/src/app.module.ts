import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RdvModule } from './rdv/rdv.module';
import { FormatRdvService } from './format-rdv/format-rdv.service';

@Module({
  imports: [RdvModule],
  controllers: [AppController],
  providers: [AppService, FormatRdvService],
})
export class AppModule {}
