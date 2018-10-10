import { Notice } from './entities/notice.entity';
import { NoticeService } from './services/notice.service';
import { NoticeController } from './controllers/notice.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Notice])],
  controllers: [AppController, NoticeController],
  providers: [AppService, NoticeService],
})
export class AppModule {}
