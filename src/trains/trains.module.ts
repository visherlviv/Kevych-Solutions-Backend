import { Module } from '@nestjs/common';
import { TrainService } from './trains.service';
import { TraineScheduleController } from './trains.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [TrainService, PrismaService],
  controllers: [TraineScheduleController],
})
export class TrainScheduleModel { }
