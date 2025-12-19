import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyFeatureService } from './property-feature.service';
import { CreatePropertyFeatureDto } from './dto/create-property-feature.dto';
import { UpdatePropertyFeatureDto } from './dto/update-property-feature.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Property Feature EndPoint')
@ApiBearerAuth()
@Controller('property-feature')
export class PropertyFeatureController {
  constructor(
    private readonly propertyFeatureService: PropertyFeatureService,
  ) {}

  @Post(':propertyId')
  @ApiOperation({ summary: 'Create a feature for a property' })
  @ApiParam({
    name: 'propertyId',
    description: 'Property id to attach features to',
    example: 1,
  })
  @ApiCreatedResponse({
    description: 'Property feature created',
    schema: {
      example: {
        id: 1,
        bedrooms: 3,
        bathrooms: 2,
        parkingSpot: 1,
        area: 120,
        hasSwimmingPool: false,
        hasGardenYard: true,
        hasBalcony: true,
        Property: { id: 1, name: 'Sample Property' },
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Invalid payload or failed to create' })
  @ApiNotFoundResponse({ description: 'Property not found' })
  create(
    @Param('propertyId') propertyId: string,
    @Body() createPropertyFeatureDto: CreatePropertyFeatureDto,
  ) {
    return this.propertyFeatureService.create(
      createPropertyFeatureDto,
      +propertyId,
    );
  }

  @Get()
  @ApiOperation({ summary: 'List all property features' })
  @ApiOkResponse({
    description: 'Array of property features',
    schema: {
      example: [
        {
          id: 1,
          bedrooms: 3,
          bathrooms: 2,
          parkingSpot: 1,
          area: 120,
          hasSwimmingPool: false,
          hasGardenYard: true,
          hasBalcony: true,
          Property: { id: 1, name: 'Sample Property' },
        },
      ],
    },
  })
  findAll() {
    return this.propertyFeatureService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a property feature by id' })
  @ApiParam({ name: 'id', description: 'PropertyFeature id', example: 1 })
  @ApiOkResponse({
    description: 'Property feature found',
    schema: {
      example: {
        id: 1,
        bedrooms: 3,
        bathrooms: 2,
        parkingSpot: 1,
        area: 120,
        hasSwimmingPool: false,
        hasGardenYard: true,
        hasBalcony: true,
        Property: { id: 1, name: 'Sample Property' },
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Property feature not found' })
  findOne(@Param('id') id: string) {
    return this.propertyFeatureService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a property feature' })
  @ApiParam({ name: 'id', description: 'PropertyFeature id', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Updated Successfully',
    schema: { example: { message: 'Updated Successfully' } },
  })
  @ApiBadRequestResponse({ description: 'Failed to update' })
  update(
    @Param('id') id: string,
    @Body() updatePropertyFeatureDto: UpdatePropertyFeatureDto,
  ) {
    return this.propertyFeatureService.update(+id, updatePropertyFeatureDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a property feature' })
  @ApiParam({ name: 'id', description: 'PropertyFeature id', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Deleted Successfully',
    schema: { example: { message: 'Deleted Successfully' } },
  })
  @ApiBadRequestResponse({ description: 'Failed to delete' })
  remove(@Param('id') id: string) {
    return this.propertyFeatureService.remove(+id);
  }
}
