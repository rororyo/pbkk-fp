import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { HomepageService } from './homepage.service';

@Controller('api/homepage')
export class HomepageController {
  constructor(
    private readonly homepageService:HomepageService
  ) {}
  @Get('items')
  async getAllItems(
    @Query('page') page: number = 1,
    @Query('category_id') categoryId?: number,
    @Query('search') search?: string
  ) {
    // Call the service to fetch items with pagination, category filtering, and search
    const data = await this.homepageService.getAllItems(page, categoryId, search);

    return {
      status: 'success',
      message: 'Items fetched successfully',
      data: data.items,
      total: data.total,
      page: data.page,
      lastPage: data.lastPage, 
    };
  }
  @Get('categories')
  async getAllCategories(){
    const data = await this.homepageService.getAllCategories();
    return{
      status:'success',
      message:'Categories fetched succesfully',
      data:data
    }
  }
  @Get('item/:id')
  async getItemById(
    @Param('id') itemId:number
  ){
    const data = await this.homepageService.getItemById(itemId);
    return{
      status:'success',
      message:'Item fetched succesfully',
      data:data
    }
  }
}
