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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Property EndPoint')
@UseGuards(JwtGuard)
@Controller('property')
export class PropertyController {
  constructor(private PropertyService: PropertyService) {}

  @Get()
  getProperties(@Query() paginationDTO: PagginationDTO) {
    return this.PropertyService.getProperties(paginationDTO);
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
