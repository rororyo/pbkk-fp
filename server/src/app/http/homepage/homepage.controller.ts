import { Body, Controller, Get, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';

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
  @Post('foot-size')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: path.resolve(__dirname, '../../../../../public/images/foot-uploads'),
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + '-' + uniqueSuffix);
        }
      })
    })
  )
  async postFootPicture(@UploadedFile() file: Express.Multer.File, @Body('gender') gender: string): Promise<any> {
    if (!file) {
      console.error('No file uploaded');
      throw new Error('No file uploaded');
    }
    
    try {
      const footSize = await this.homepageService.postFootPicture(file.filename, gender);
      console.log('Foot size successfully calculated:', footSize);

      return {
        status: 'success',
        message: 'Foot size successfully calculated',
        data: footSize,
      };
    } catch (error) {
      console.error('Error in calculating foot size:', error);
      throw error;
    }
  }
}
