import { IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class CreatePropertyFeatureDto {
  @IsNumber()
  @IsPositive()
  bedrooms: number;

  @IsNumber()
  @IsPositive()
  bathrooms: number;

  @IsNumber()
  @IsPositive()
  parkingSpot: number;

  @IsNumber()
  @IsPositive()
  area: number;

  @IsBoolean()
  hasSwimmingPool: boolean;

  @IsBoolean()
  hasGardenYard: boolean;

  @IsBoolean()
  hasBalcony: boolean;
}
