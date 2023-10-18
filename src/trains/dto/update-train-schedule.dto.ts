import { IsNotEmpty, IsString } from "class-validator";

export class UpdateScheduleDto {
  readonly name: string;
  @IsString()
  readonly comment: string;
  @IsString()
  readonly schedules: string;

}