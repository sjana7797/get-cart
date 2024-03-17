import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Banner } from '@prisma/client';
import { CreateBannerDto, UpdateBannerDto } from './banner.dto';
import { redis } from 'cache';

@Injectable()
export class BannerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBanner(banner: CreateBannerDto) {
    return this.prismaService.banner.create({ data: banner });
  }

  async getBanners() {
    let banners: Banner[];

    const bannersCache = await redis.get('banners');

    if (bannersCache) {
      banners = JSON.parse(bannersCache);
    } else {
      // get the data from the db
      banners = await this.prismaService.banner.findMany();

      // set the cache in banners
      redis.set('banners', JSON.stringify(banners));
    }

    return banners;
  }

  async updateBanner(banner: UpdateBannerDto) {
    return this.prismaService.banner.update({
      where: { id: banner.id },
      data: banner.data,
    });
  }

  /**
   * @description delete a banner by id. can also do soft delete
   * @param bannerId {string}
   * @returns {Promise<Banner>}
   */
  async deleteBanner(bannerId: string): Promise<Banner> {
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
