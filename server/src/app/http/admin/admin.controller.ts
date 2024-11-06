import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { adminService } from './admin.service';

@Controller('api/store-owner')
export class StoreOwnerController {
  constructor(
    private readonly storeOwnerService:adminService
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('item')
  async postStoreItem(
    @Body('item_name') name:string,
    @Body('category_id')categoryId: number,
    @Body('img_path')imgPath: string,
    @Body('description')description: string,
    @Body('stock')stock: number,
    @Body('price')price: number
  ) {
     await this.storeOwnerService.postStoreItem(
      name,categoryId,imgPath,description,stock,price
    )
    return{
      status:'success',
      message:'Item created successfully',
    }
  }
}
