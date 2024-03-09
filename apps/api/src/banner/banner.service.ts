import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateBannerDto, UpdateBannerDto } from './banner.dto';

@Injectable()
export class BannerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBanner(banner: CreateBannerDto) {
    return this.prismaService.banner.create({ data: banner });
  }

  async getBanners() {
    return this.prismaService.banner.findMany();
  }

  async updateBanner(banner: UpdateBannerDto) {
    return this.prismaService.banner.update({
      where: { id: banner.id },
      data: banner.data,
    });
  }

  /**
   * @description delete a banner by id. can also do soft delete
   * @param bannerId
   * @returns
   */
  async deleteBanner(bannerId: string) {
    // delete the banner
    return this.prismaService.banner.delete({ where: { id: bannerId } });

    // soft delete the banner
    // this need to be updated in the prisma schema
    // return this.prismaService.banner.update({
    //   where: { id: bannerId },
    //   data: { deleted: true },
    // });
  }
}
