import { Faker } from '@faker-js/faker';
import { PropertyFeature } from './../entities/propertyFeature.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  (faker: Faker) => {
    const propertyFeature = new PropertyFeature();
    propertyFeature.bedrooms = faker.number.int({ min: 3, max: 12 });
    propertyFeature.bathrooms = faker.number.int({ min: 1, max: 12 });
    propertyFeature.parkingSpot = faker.number.int({ min: 0, max: 10 });
    propertyFeature.area = faker.number.int({ min: 250, max: 30000 });
    propertyFeature.hasSwimmingPool = faker.datatype.boolean();
    propertyFeature.hasGardenYard = faker.datatype.boolean();
    propertyFeature.hasBalcony = faker.datatype.boolean();
    return propertyFeature;
  },
);
