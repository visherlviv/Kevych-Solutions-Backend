import { Prisma } from '@prisma/client';

export class Project implements Prisma.TrainsSchedulesCreateInput {
  readonly name: string;
  readonly comment: string;
  readonly schedules: string;
}