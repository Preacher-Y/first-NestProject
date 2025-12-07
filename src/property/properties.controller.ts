import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePropertyDto } from './Dto/CreateProperty.dto';
import { IdDto } from './Dto/IdType.Dto';
import { ParseIdPipe } from './pipe/parseInt.Id';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  private properties = [
    {
      id: 1,
      name: 'Property 1',
    },
    {
      id: 2,
      name: 'Property 2',
    },
    {
      id: 3,
      name: 'Property 3',
    },
  ];

  constructor(private PropertyService: PropertyService) {}

  @Get()
  getProperties() {
    return this.PropertyService.getProperties();
  }

  @Get(':id')
  getProperty(@Param('id', ParseIdPipe) id: number) {
    return this.PropertyService.getProperty(id);
  }

  @Post()
  createProperty(
    @Body()
    Body: CreatePropertyDto,
  ) {
    return this.PropertyService.createProperty(Body);
  }

  @Patch(':id')
  updateProperty(
    @Body()
    Body: CreatePropertyDto,
    @Param()
    { id }: IdDto,
  ) {
    return this.PropertyService.updateProperty(Body, id);
  }

  @Delete(':id')
  deleteProperty(@Param() { id }: IdDto) {
    return this.PropertyService.deleteProperty(id);
  }
}
