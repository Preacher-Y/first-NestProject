import { faker } from '@faker-js/faker';
import { Property } from './../entities/property.entity';
import { PropertyFeature } from './../entities/propertyFeature.entity';
import { User } from './../entities/User.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    console.log('Seeding Users ....');
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10);

    const PropertyFactory = factoryManager.get(Property);
    const PropertyFeatureFactory = factoryManager.get(PropertyFeature);

    console.log('Seeding Properties ....');
    const properties = await Promise.all(
      Array(60)
        .fill('')
        .map(async () => {
          const property = await PropertyFactory.make({
            user: faker.helpers.arrayElement(users),
            PropertyFeature: await PropertyFeatureFactory.save(),
          });
          return property;
        }),
    );

    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
