import {
  Module,
  //ValidationPipe
} from '@nestjs/common';
// import { APP_PIPE } from '@nestjs/core';
import { PropertyController } from 'src/property/properties.controller';
import { PropertyService } from './property.service';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],

  // ----- with out Zod -------
  // providers: [
  //   {
  //     provide: APP_PIPE,
  //     useValue: new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: true,
  //       transform: true,
  //       transformOptions: {
  //         enableImplicitConversion: true,
  //       },
  //     }),
  //   },
  // ],
})
export class PropertyModule {}
