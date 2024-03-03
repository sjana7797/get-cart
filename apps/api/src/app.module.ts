import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AnalyticModule } from './analytic/analytic.module';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [ProductModule, UserModule, AnalyticModule, BannerModule],
})
export class AppModule {}
