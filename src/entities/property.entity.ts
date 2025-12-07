import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(
    () => PropertyFeature,
    (propertyfeature) => propertyfeature.Property,
    { cascade: true },
  )
  PropertyFeature: PropertyFeature;
}
