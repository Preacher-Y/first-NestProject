import { Module } from '@nestjs/common';
import { PropertyFeatureService } from './property-feature.service';
import { PropertyFeatureController } from './property-feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyFeature } from 'src/entities/propertyFeature.entity';
import { Property } from 'src/entities/property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyFeature, Property])],
  controllers: [PropertyFeatureController],
  providers: [PropertyFeatureService],
})
export class PropertyFeatureModule {}
