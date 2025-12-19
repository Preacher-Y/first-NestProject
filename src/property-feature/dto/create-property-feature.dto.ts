import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class CreatePropertyFeatureDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({ description: 'Number of bedrooms', example: 3 })
  bedrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ description: 'Number of bathrooms', example: 2 })
  bathrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ description: 'Available parking spots', example: 1 })
  parkingSpot: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ description: 'Area in square meters', example: 120 })
  area: number;

  @IsBoolean()
  @ApiProperty({ description: 'Has a swimming pool', example: false })
  hasSwimmingPool: boolean;

  @IsBoolean()
  @ApiProperty({ description: 'Has garden or yard', example: true })
  hasGardenYard: boolean;

  @IsBoolean()
  @ApiProperty({ description: 'Has balcony', example: true })
  hasBalcony: boolean;
}
