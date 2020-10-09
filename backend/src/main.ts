import {INestApplication} from '@nestjs/common';
import {NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import 'dotenv/config';

import {AppModule} from './app.module';
import DB from './db';

const createSwaggerDoc = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Highlander API')
    .setDescription('API for portfolio application')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const db = new DB();
  await db.init();

  const app = await NestFactory.create(AppModule);
  if (process.env.STATE !== 'PROD') {
    createSwaggerDoc(app);
  }

  await app.listen(5000);
}
bootstrap();
