import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adding Swagger
  const config = new DocumentBuilder()
    .setTitle('Property Management')
    .setDescription('API Documentation for the Property Management Info')
    .setVersion('1.0.0')
    .build();
  // Creating swagger document
  const document = SwaggerModule.createDocument(app, config);
  // Setting up the server
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
