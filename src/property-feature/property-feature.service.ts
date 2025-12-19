import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreatePropertyFeatureDto } from './dto/create-property-feature.dto';
import { UpdatePropertyFeatureDto } from './dto/update-property-feature.dto';
import { PropertyFeature } from 'src/entities/propertyFeature.entity';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertyFeatureService {
  constructor(
    @InjectRepository(PropertyFeature)
    private properfeatureRepo: Repository<PropertyFeature>,
    @InjectRepository(Property)
    private propertyRepo: Repository<Property>,
  ) {}
  async create(
    createPropertyFeatureDto: CreatePropertyFeatureDto,
    propertyId: number,
  ) {
    const property = await this.propertyRepo.findOne({
      where: { id: propertyId },
    });
    if (!property)
      throw new NotFoundException(`Property with id ${propertyId} not found`);

    const propertyFeature = this.properfeatureRepo.create({
      ...createPropertyFeatureDto,
      Property: property,
    });

    return await this.properfeatureRepo.save(propertyFeature);
  }

  async findAll() {
    return await this.properfeatureRepo.find();
  }

  async findOne(id: number) {
    const feature = await this.properfeatureRepo.findOne({ where: { id } });
    if (!feature)
      throw new NotFoundException(`Property feature ${id} not found`);
    return feature;
  }

  async update(id: number, updatePropertyFeatureDto: UpdatePropertyFeatureDto) {
    const { affected } = await this.properfeatureRepo.update(
      { id },
      updatePropertyFeatureDto,
    );
    if (affected) return { message: 'Updated Successfully' };
    throw new BadRequestException('Failed to update property feature');
  }

  async remove(id: number) {
    const { affected } = await this.properfeatureRepo.delete({ id });
    if (affected) return { message: 'Deleted Successfully' };
    throw new BadRequestException('Failed to delete property feature');
  }
}
