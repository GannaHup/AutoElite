import { Product } from "@/features/products/models";

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
}

export interface CartWithDetails {
  items: CartItem[];
  total: number;
  totalItems: number;
}
