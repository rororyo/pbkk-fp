import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/http/auth/auth.module';
import { HomepageModule } from './app/http/homepage/homepage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { adminModule } from './app/http/admin/admin.module';

@Module({
  imports: [
    AuthModule,
    HomepageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const isProduction = process.env.NODE_ENV === 'PRODUCTION';
        return {
          type: 'postgres',
          url: isProduction ? process.env.DATABASE_URL : undefined,
          entities: isProduction
            ? [__dirname + '/dist/database/entities/*.entity.js']  // Use the compiled JS files in production
            : [__dirname + '/src/database/entities/*.entity.ts'],   // Use the TS files in development
          synchronize: true,
          ssl: isProduction
            ? process.env.DB_SSL === 'true' 
              ? { rejectUnauthorized: false } 
              : false
            : false,
          ...(isProduction
            ? {}
            : {
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 5432,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DB,
              }),
        };
      },
    }),
    adminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
