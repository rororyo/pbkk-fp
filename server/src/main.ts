import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:5173', 'https://setapak.vercel.app'],
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  });

  await app.listen(4000);
}
bootstrap();
