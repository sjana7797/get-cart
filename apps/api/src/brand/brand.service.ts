import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllBrands() {
    const brands = await this.prismaService.brand.findMany();

    return brands;
  }

  async addBrand({ name }: CreateBrandDto) {
    // check if the brand already exists
    const brand = await this.prismaService.brand.findFirst({
      where: { name },
    });

    // return  brand already exists
    if (brand) {
      throw new HttpException('brand already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.prismaService.brand.create({
      data: { name },
    });
  }
}
