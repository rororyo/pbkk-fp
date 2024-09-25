import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/http/auth/auth.module';
import { HomepageModule } from './app/http/homepage/homepage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StoreOwnerModule } from './app/http/store-owner/store-owner.module';




@Module({
  imports: [AuthModule, HomepageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      entities: process.env.NODE_ENV === 'PRODUCTION' ? ['dist/database/entities/*.entity{.ts,.js}'] :  ['src/database/entities/*.entity.ts'],
      synchronize: true,
    }),
    StoreOwnerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
