import { Module } from '@nestjs/common';
import { StoreOwnerController } from './admin.controller';
import { adminService } from './admin.service';
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
  providers: [adminService]
})
export class adminModule {}
