import { IsString, IsNumber, IsEnum, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  age: number;

  @IsEnum(['admin', 'user'])
  role: string;
}