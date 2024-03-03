import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getProducts() {
    return this.productService.products();
  }

  @Post('create')
  async createProduct(
    @Body()
    product: Prisma.productCreateInput,
  ) {
    return this.productService.createProduct(product);
  }
}
