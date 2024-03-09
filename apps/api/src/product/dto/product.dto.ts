import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  price: number;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  product_images: string[];

  @ApiProperty()
  @IsEnum(Category)
  @IsNotEmpty()
  category: Category;

  @ApiProperty()
  @IsString()
  @IsUUID()
  brand_id: string;
}
