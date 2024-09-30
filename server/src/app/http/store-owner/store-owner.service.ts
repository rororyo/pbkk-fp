import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'database/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreOwnerService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>
  ) {}

  async postStoreItem(
    name: string,
    category_id: number,
    description: string,
    img_path: string,
    price: number,
    stock: number
  ) {
    // Create a new item, with category_id directly assigned
    const item = this.itemRepository.create({
      item_name: name,
      category: { id: category_id },  // Only reference the category_id
      description: description,
      img_path: img_path,
      price: price,
      stock: stock,
    });

    // Save the new item
    const data = await this.itemRepository.save(item);

    if (!data) throw new NotFoundException('Item could not be saved');

    return data; // Optionally return the saved item
  }
}
