import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Cart } from './cart.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_name: string;
  
  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })  // Explicitly name the foreign key column
  category: Category;
  
  @Column()
  img_path: string;
  
  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column("text", { array: true,nullable: true })
  tags: string[];

  @OneToMany(() => Cart, (cart) => cart.item) // Define relationship to Cart
  carts: Cart[];
}
