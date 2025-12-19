import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsPositive,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { CreatePropertyFeatureDto } from 'src/property-feature/dto/create-property-feature.dto';

export class CreatePropertyDto {
  @IsString()
  @ApiProperty({
    description: 'Property name/title',
    example: 'Ocean View Apartment',
  })
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Owner user id (ownerID)',
    example: 1,
    required: false,
  })
  ownerId?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePropertyFeatureDto)
  @ApiProperty({
    description: 'Optional property feature payload',
    type: () => CreatePropertyFeatureDto,
    required: false,
  })
  propertyFeature?: CreatePropertyFeatureDto;
}
