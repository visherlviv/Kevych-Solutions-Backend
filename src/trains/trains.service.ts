import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Project } from './trains.model';

@Injectable()
export class TrainService {
  constructor(private prisma: PrismaService) { }

  async getAllTrains(): Promise<Project[]> {
    return this.prisma.trainsSchedules.findMany();
  }
  async getTrainSchedule(id: number): Promise<Project | null> {
    return this.prisma.trainsSchedules.findUnique({ where: { id: Number(id) } });
  }
  async createTrainsSchedule(data: Project): Promise<Project> {
    return this.prisma.trainsSchedules.create({ data });
  }
  async updateTrainSchedule(id: number, data: Project): Promise<Project> {
    return this.prisma.trainsSchedules.update({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  async deleteTrainSchedule(id: number): Promise<Project> {
    return this.prisma.trainsSchedules.delete({
      where: { id: Number(id) },
    });
  }
}
