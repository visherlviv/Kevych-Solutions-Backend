import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainScheduleModel } from './trains/trains.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TrainScheduleModel, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
