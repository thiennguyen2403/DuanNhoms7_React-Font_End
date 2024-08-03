import { Product } from "./Product";

export interface Order {
  id: string;
  userId: string;
  products: {
    product: Product;
    quantity: number;
  }[];
  totalPrice: number;
  orderStatus: string;
  date: string;
}
