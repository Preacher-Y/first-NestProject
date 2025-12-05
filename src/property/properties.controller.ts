import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  UsePipes,
} from '@nestjs/common';
import { CreatePropertyDto } from './Dto/CreateProperty.dto';
import { IdDto } from './Dto/IdType.Dto';
import { ParseIdPipe } from './pipe/parseInt.Id';
import { ZodPipeValidation } from './pipe/ZodPipe';
import { ZodCreateSchema, type ZodCreateType } from './Dto/CreateZod.Dto';
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
    return this.PropertyService.getProperties(this.properties);
  }

  @Get(':id')
  getProperty(@Param('id', ParseIdPipe) id: number) {
    return this.PropertyService.getProperty(this.properties, id);
  }

  @Post()
  createProperty(
    @Body()
    Body: CreatePropertyDto,
  ) {
    return this.PropertyService.createProperty(this.properties, Body);
  }

  @Patch()
  @UsePipes(new ZodPipeValidation(ZodCreateSchema))
  updateProperty(
    @Body()
    Body: ZodCreateType,
    @Param()
    { id }: IdDto,
  ) {
    const property = this.properties.find((p) => p.id === id);
    if (property) {
      property.name = Body.name;
      return property;
    }
    return { message: 'Property not found' };
  }
}
