export interface Product {
  id: string;
  tag?: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  thumbnail: string;
}
