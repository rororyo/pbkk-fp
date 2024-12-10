import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'database/entities/item.entity';
import { User } from 'database/entities/user.entity';
import { Category } from 'database/entities/category.entity';
import { Cart } from 'database/entities/cart.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[AuthModule,
    TypeOrmModule.forFeature([Item,User,Category,Cart])
  ],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
