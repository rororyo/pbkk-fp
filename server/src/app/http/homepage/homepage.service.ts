import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { spawn } from 'child_process';
import { Category } from 'database/entities/category.entity';
import { Item } from 'database/entities/item.entity';
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

    // Add searching by item_name, description, or tags if search string is provided
    if (search) {
      const lowerSearch = `%${search.toLowerCase()}%`;

      // Search in item_name, description, and tags using UNNEST() for the tags array
      query.andWhere(
        `(LOWER(item.item_name) LIKE :lowerSearch OR LOWER(item.description) LIKE :lowerSearch OR EXISTS (
          SELECT 1 FROM UNNEST(item.tags) tag WHERE LOWER(tag) LIKE :lowerSearch
        ))`,
        { lowerSearch }
      );
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
  async postFootPicture(imgName: string, gender: string): Promise<{ footSize: number, shoeSize: object }> {
    return new Promise((resolve, reject) => {
        const python = spawn('python', ['src/utils/foot-detection-utils/main.py', imgName, gender]); // Pass the image path and gender as arguments
        let output = '';

        python.stdout.on('data', (data) => {
            output += data.toString();
        });

        python.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                reject(`Python script exited with code ${code}`);
            } else {
                try {
                    const result = JSON.parse(output.trim());  
                    resolve({
                        footSize: result.foot_length,  
                        shoeSize: result  
                    });
                } catch (err) {
                    reject(`Error parsing Python output: ${err}`);
                }
            }
        });
    });
}

}
