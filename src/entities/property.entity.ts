import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';
import { User } from './User.entity';

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

  @ManyToOne(() => User, (user) => user.properties)
  @JoinColumn({ name: 'ownerID' })
  user: User;

  @ManyToMany(() => User, (user) => user.likedProperties)
  useLiked: User[];
}
