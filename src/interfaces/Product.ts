import { Category } from "./Category";

export interface Product {
  id: string;
  _id: string;
  title: string;
  price: number;
  category: Category;
  description?: string;
  thumbnail?: string;
  images?: string;
}
