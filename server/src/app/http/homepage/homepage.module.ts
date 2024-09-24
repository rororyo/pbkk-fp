import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/database/entities/item.entity';
import { Category } from 'src/database/entities/category.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Item,Category
    ])
  ],
  providers: [HomepageService],
  controllers: [HomepageController]
})
export class HomepageModule {}
