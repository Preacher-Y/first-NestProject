import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class CreatePropertyFeatureDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  bedrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  bathrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  parkingSpot: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  area: number;

  @IsBoolean()
  @ApiProperty()
  hasSwimmingPool: boolean;

  @IsBoolean()
  @ApiProperty()
  hasGardenYard: boolean;

  @IsBoolean()
  @ApiProperty()
  hasBalcony: boolean;
}
