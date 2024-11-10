export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  item_name: string;
  price: number;
  img_path: string;
  description: string;
  stock: number;
  category: Category;
}

export interface ShoeSize {
  US: string;
  EU: string;
  UK: string;
  'Foot Length (cm)': string;
}

export interface FootSizeData {
  footSize: string;
  shoeSize: ShoeSize;
}

export interface ProductCardProps {
  product: Product;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}