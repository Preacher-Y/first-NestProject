import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

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

  @Get()
  getProperties() {
    return this.properties;
  }

  @Get(':id')
  getProperty(@Param('id', ParseIntPipe) id: number) {
    return this.properties.find((property) => property.id === id);
  }

  @Post()
  createProperty(@Body() property: { name: string }) {
    const newProperty = {
      id: this.properties.length + 1,
      name: property.name,
    };
    this.properties.push(newProperty);
    return newProperty;
  }
}
