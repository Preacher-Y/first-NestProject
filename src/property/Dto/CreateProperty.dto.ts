import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @ApiProperty({
    description: 'Property name/title',
    example: 'Ocean View Apartment',
  })
  name: string;
}
