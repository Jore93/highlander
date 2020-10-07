import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

import DB, {sequelize} from './db';
import {logLine} from './helpers';

async function bootstrap() {
  const db = new DB();
  db.init();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
