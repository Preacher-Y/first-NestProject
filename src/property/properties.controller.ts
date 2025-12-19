import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreatePropertyDto } from './Dto/CreateProperty.dto';
import { IdDto } from './Dto/IdType.Dto';
import { ParseIdPipe } from './pipe/parseInt.Id';
import { PropertyService } from './property.service';
import { PagginationDTO } from './Dto/Paggination.dto';
import { JwtGuard } from 'src/auth/jwt.guard';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('Property EndPoint')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('property')
export class PropertyController {
  constructor(private PropertyService: PropertyService) {}

  @Get()
  @ApiOperation({ summary: 'Get paginated list of properties (protected)' })
  @ApiOkResponse({ description: 'Array of properties' })
  getProperties(@Query() paginationDTO: PagginationDTO) {
    return this.PropertyService.getProperties(paginationDTO);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single property by id (protected)' })
  @ApiParam({ name: 'id', description: 'Property id', example: 1 })
  @ApiOkResponse({ description: 'Property found' })
  @ApiNotFoundResponse({ description: 'Property not found' })
  getProperty(@Param('id', ParseIdPipe) id: number) {
    return this.PropertyService.getProperty(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a property (protected)' })
  @ApiCreatedResponse({ description: 'Property created' })
  @ApiBadRequestResponse({ description: 'Invalid payload' })
  createProperty(
    @Body()
    Body: CreatePropertyDto,
  ) {
    return this.PropertyService.createProperty(Body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a property (protected)' })
  @ApiParam({ name: 'id', description: 'Property id', example: 1 })
  @ApiOkResponse({ description: 'Updated Successfully' })
  @ApiBadRequestResponse({ description: 'Failed to update' })
  updateProperty(
    @Body()
    Body: CreatePropertyDto,
    @Param()
    { id }: IdDto,
  ) {
    return this.PropertyService.updateProperty(Body, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a property (protected)' })
  @ApiParam({ name: 'id', description: 'Property id', example: 1 })
  @ApiOkResponse({ description: 'Deleted Successfully' })
  @ApiBadRequestResponse({ description: 'Failed to delete' })
  deleteProperty(@Param() { id }: IdDto) {
    return this.PropertyService.deleteProperty(id);
  }
}
