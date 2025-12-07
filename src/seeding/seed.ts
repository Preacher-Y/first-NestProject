import { pgConfig } from './../../dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './main.seeder';
import { UserFactory } from './user.factory';
import { PropertyFactory } from './property.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';

const options: DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories: [UserFactory, PropertyFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);

datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});
