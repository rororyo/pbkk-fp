import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Item } from 'src/database/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomepageService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ){}
  async getAllItems(page: number, categoryId?: number, search?: string) {
    const take = 9; // Number of items per page
    const skip = (page - 1) * take; // Calculate the offset

    // Create a query builder for more complex queries
    const query = this.itemRepository.createQueryBuilder('item')
      .leftJoinAndSelect('item.category', 'category') 
      .take(take) // Limit the number of results
      .skip(skip); // Skip the results based on the page number

    // Add filtering by category if categoryId is provided
    if (categoryId) {
      query.andWhere('item.category_id = :categoryId', { categoryId });
    }

    // Add searching by item_name if search string is provided
    if (search) {
      query.andWhere('LOWER(item.item_name) LIKE LOWER(:search)', { search: `%${search}%` });
    }
    

    // Execute the query and get the data and total count
    const [items, total] = await query.getManyAndCount();

    return {
      items,
      total,
      page,
      lastPage: Math.ceil(total / take), // Calculate the last page
    };
  }

  async getAllCategories(){
    const categories = await this.categoryRepository.find({order:{id:'ASC'}});
    return categories
  }
  async getItemById(id:number){
    const item = await this.itemRepository.findOne({where:{id}});
    if(!item) throw new NotFoundException('Item not found');
    return item

  }
}
