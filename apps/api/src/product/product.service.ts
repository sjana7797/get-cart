import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async products() {
    return this.prismaService.product.findMany();
  }

  async createProduct(product: ProductDto) {
    return this.prismaService.product.create({
      data: product,
    });
  }
}
