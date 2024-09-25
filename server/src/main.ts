import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://127.0.0.1:8000', 
    credentials: true,  
    allowedHeaders: 'Content-Type, Authorization',  
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',  
  });

  await app.listen(4000);
}
bootstrap();
