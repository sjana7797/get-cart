import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  price: number;

  @IsOptional()
  description: string;
}
