import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @ManyToOne(() => Item, (item) => item.carts, { eager: true }) // Define relationship to Item
  @JoinColumn({ name: 'item_id' }) // Map 'item_id' to Item's primary key
  item: Item;
  @Column()
  quantity: number;
}