import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpCode,
  HttpStatus,
  Header,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-train-schedule.dto';
import { UpdateScheduleDto } from './dto/update-train-schedule.dto';
import { TrainService } from './trains.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/shop/phones')
//\@UseGuards(AuthGuard())
export class TraineScheduleController {
  constructor(private readonly TrainScheduleService: TrainService) { }
  @Get()
  async getAll() {
    const phones = await this.TrainScheduleService.getAllTrains();
    if (!phones.length) {
      throw new NotFoundException()
    }
    return phones
  }
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const phones = await this.TrainScheduleService.getTrainSchedule(Number(id));
    if (!phones) {
      throw new NotFoundException();
    }
    return phones;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() CreatePhoneDto: CreateScheduleDto) {
    return this.TrainScheduleService.createTrainsSchedule(CreatePhoneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.TrainScheduleService.deleteTrainSchedule(Number(id));
    } catch (e) {
      throw new NotFoundException(`Phone with id ${id} not found`);
    }
  }
  //comment
  @Put(':id')
  update(@Body() body: UpdateScheduleDto, @Param('id') id: string) {
    return this.TrainScheduleService.updateTrainSchedule(Number(id), body);
  }
}
