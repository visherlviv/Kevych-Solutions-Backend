import { Module } from '@nestjs/common';
import { TrainService } from './trains.service';
import { TraineScheduleController } from './trains.controller';
import { PrismaService } from '../prisma.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [TrainService, PrismaService],
  controllers: [TraineScheduleController],
})
export class TrainScheduleModel { }
