import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { Prisma } from 'database';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post('create')
  async createBanner(@Body() createBanner: Prisma.BannerCreateInput) {
    return await this.bannerService.createBanner(createBanner);
  }

  @Get('all')
  async getBanners() {
    return await this.bannerService.getBanners();
  }

  @Patch('update')
  async updateBanner(
    @Body() updateBanner: { data: Prisma.BannerUpdateInput; id: string },
  ) {
    return await this.bannerService.updateBanner(updateBanner);
  }

  @Delete('delete')
  async deleteBanner(@Query('bannerId') bannerId: string) {
    return await this.bannerService.deleteBanner(bannerId);
  }
}
