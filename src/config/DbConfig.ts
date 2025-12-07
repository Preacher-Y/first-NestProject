import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export default (): PostgresConnectionOptions => ({
  url: process.env.URL,
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
});
