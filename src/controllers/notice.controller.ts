import { NoticeService } from './../services/notice.service';
import { Result } from './../common/result';
import { Controller, Get } from '@nestjs/common';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get('list')
  async findAll(): Promise<Result> {
    const data = await this.noticeService.findAll();
    return Result.success(data);
  }
}
