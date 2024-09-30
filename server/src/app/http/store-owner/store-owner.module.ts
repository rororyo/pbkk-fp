import { Module } from '@nestjs/common';
import { StoreOwnerController } from './store-owner.controller';
import { StoreOwnerService } from './store-owner.service';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'database/entities/item.entity';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forFeature([
      Item
    ])
  ],
  controllers: [StoreOwnerController],
  providers: [StoreOwnerService]
})
export class StoreOwnerModule {}
