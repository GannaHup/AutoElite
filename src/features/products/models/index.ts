export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  quantity?: number; // Optional quantity field for cart management
}

interface Rating {
  rate: number;
  count: number;
}
