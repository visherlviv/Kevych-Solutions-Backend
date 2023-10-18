import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class EntityDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    login: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}