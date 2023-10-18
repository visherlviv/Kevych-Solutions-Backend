
import { IsNotEmpty, IsString } from "class-validator";

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  readonly comment: string;
  readonly schedules: string;

}