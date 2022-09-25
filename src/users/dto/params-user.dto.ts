import { IsOptional, IsString } from 'class-validator';

export class UserParamsDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
}
