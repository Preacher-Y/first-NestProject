import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PagginationDTO {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Number of records to skip',
    example: 0,
    required: false,
  })
  skip: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Maximum number of records to return',
    example: 10,
    required: false,
  })
  limit: number;
}
