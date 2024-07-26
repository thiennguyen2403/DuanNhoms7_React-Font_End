import { Category } from "./Category";

export interface Product {
  _id: string;
  id?: number | string;
  title: string;
  price: number;
  category?: Category;
  description?: string;
  thumbnail?: string;
  images?: string;
}
