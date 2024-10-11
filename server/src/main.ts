import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', 
    credentials: true,  
    allowedHeaders: 'Content-Type, Authorization',  
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',  
  });

  await app.listen(4000);
}
bootstrap();