import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalyticService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAnalytic() {
    const totalProducts = await this.prismaService.product.count();
    return {
      totalProducts,
    };
  }
}
