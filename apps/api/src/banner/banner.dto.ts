import {
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBannerDto {
  @IsString()
  @ApiProperty()
  image: string;

  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsString()
  href: string;
}

export class UpdateBannerDto {
  @Type(() => PartialType(CreateBannerDto))
  @ApiProperty({ type: () => PartialType(CreateBannerDto) })
  @IsObject()
  @ValidateNested()
  @ApiProperty()
  data: Partial<CreateBannerDto>;

  @IsString()
  @IsUUID()
  @ApiProperty()
  id: string;
}
