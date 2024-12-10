import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'database/entities/cart.entity';
import { Category } from 'database/entities/category.entity';
import { Item } from 'database/entities/item.entity';
import { User } from 'database/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
  ) {}
  async getCartItems(userId: number, itemId?: number) {
    const query = this.cartRepository.createQueryBuilder('cart')
      .innerJoinAndSelect('cart.item', 'item') // Join the Item entity
      .where('cart.user_id = :userId', { userId });
  
    if (itemId) {
      query.andWhere('item.id = :itemId', { itemId }); // Filter by item.id
    }
  
    return await query.getMany();
  }
  async postCartItem(userId: number, itemId: number, quantity: number) {
    // Check if the item exists
    const item = await this.itemRepository.findOne({ where: { id: itemId } });
    if (!item) {
      throw new NotFoundException('Item not found');
    }
  
    // Fetch the existing cart item for the user and item
    const existingCartItem = await this.cartRepository.findOne({
      where: {
        user_id: userId,
        item: { id: itemId }, // Use relationship here
      },
    });
  
    if (existingCartItem) {
      // If the item already exists, update the quantity
      const newQuantity = Number(existingCartItem.quantity) + Number(quantity);
      await this.cartRepository.update(
        { id: existingCartItem.id }, // Identify the existing cart item by its ID
        { quantity: newQuantity },
      );
    } else {
      // If the item doesn't exist, add it to the cart with the new quantity
      await this.cartRepository.save({
        user_id: userId,
        item: item, // Use the fetched Item entity
        quantity: quantity,
      });
    }
  }
  async updateCartItem(userId: number, itemId: number, quantity: number) {
    // Check if the cart item exists
    const cartItem = await this.cartRepository.findOne({
      where: {
        user_id: userId,
        item: { id: itemId }, // Use the relationship for the item
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    // Update the quantity for the cart item
    await this.cartRepository.update(
      { id: cartItem.id }, // Identify the cart item by its ID
      { quantity: quantity },
    );
  }

  async deleteCartItem(userId: number, itemId: number) {
    // Check if the cart item exists before deleting
    const cartItem = await this.cartRepository.findOne({
      where: {
        user_id: userId,
        item: { id: itemId }, // Use the relationship for the item
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    // Delete the cart item
    await this.cartRepository.delete({ id: cartItem.id });
  }
}

