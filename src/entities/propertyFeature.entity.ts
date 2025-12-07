import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpot: number;

  @Column()
  area: number;

  @Column()
  hasSwimmingPool: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasColumn: boolean;

  @OneToOne(() => Property, (property) => property.PropertyFeature)
  @JoinColumn()
  Property: Property;
}
