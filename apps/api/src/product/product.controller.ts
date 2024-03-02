import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.products();
  }

  @Post('create')
  async createProduct(@Body() productDto: ProductDto) {
    return this.productService.createProduct(productDto);
  }
}
