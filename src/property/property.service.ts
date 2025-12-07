import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './Dto/CreateProperty.dto';
import { PagginationDTO } from './Dto/Paggination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private PropertyRepo: Repository<Property>,
  ) {}
  async getProperties(paginationDTO: PagginationDTO) {
    return await this.PropertyRepo.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
    });
  }

  async getProperty(id: number) {
    const property = await this.PropertyRepo.findOne({
      where: {
        id,
      },
    });
    if (!property) throw new NotFoundException();
    return property;
  }

  async createProperty(dto: CreatePropertyDto) {
    return await this.PropertyRepo.save(dto);
  }

  async updateProperty(dto: CreatePropertyDto, id: number) {
    const data = await this.PropertyRepo.findOne({ where: { id } });
    if (!data) throw new NotFoundException();

    const { affected } = await this.PropertyRepo.update({ id }, dto);
    if (affected) return 'Updated Successfully';
    return 'Failed to Update';
  }

  async deleteProperty(id: number) {
    const data = await this.PropertyRepo.findOne({ where: { id } });
    if (!data) throw new NotFoundException();

    const { affected } = await this.PropertyRepo.delete({ id });
    if (affected) return 'Deleted Successfully';
    return 'Failed to Delete';
  }
}
