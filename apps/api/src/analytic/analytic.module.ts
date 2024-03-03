import { Module } from '@nestjs/common';
import { AnalyticService } from './analytic.service';
import { AnalyticController } from './analytic.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AnalyticService, PrismaService],
  controllers: [AnalyticController],
})
export class AnalyticModule {}
