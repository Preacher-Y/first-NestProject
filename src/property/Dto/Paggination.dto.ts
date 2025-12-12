import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PagginationDTO {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  skip: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  limit: number;
}
