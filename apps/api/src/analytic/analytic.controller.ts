import { Controller, Get } from '@nestjs/common';
import { AnalyticService } from './analytic.service';

@Controller('analytic')
export class AnalyticController {
  constructor(private readonly analyticService: AnalyticService) {}

  @Get('')
  async getAnalytic() {
    return this.analyticService.getAnalytic();
  }
}
