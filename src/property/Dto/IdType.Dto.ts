import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class IdDto {
  @IsInt()
  @IsPositive()
  @ApiProperty()
  id: number;
}
