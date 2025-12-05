import { Module } from '@nestjs/common';
import { PropertyController } from 'src/property/properties.controller';

@Module({
  controllers: [PropertyController],
})
export class PropertyModule {}
