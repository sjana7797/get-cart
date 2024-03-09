import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get('/all')
  async getAllBrands() {
    return await this.brandService.getAllBrands();
  }

  @Post('create')
  async addBrand(@Body() brand: CreateBrandDto) {
    return await this.brandService.addBrand(brand);
  }
}
