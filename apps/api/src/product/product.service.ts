import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async products() {
    return this.prismaService.product.findMany({});
  }

  async createProduct(product: Prisma.ProductCreateInput) {
    return await this.prismaService.product.create({
      data: product,
    });
  }
}
