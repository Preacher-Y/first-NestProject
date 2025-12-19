import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class IdDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'Numeric id', example: 1 })
  id: number;
}
