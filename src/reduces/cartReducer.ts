import { CartItem } from "../interfaces/CartItem";
import { Product } from "../interfaces/Product";

// Định nghĩa các loại hành động cho reducer
type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; quantity: number };
    }
  | { type: "LOAD_CART"; payload: CartItem[] };

// Giảm thiểu các lỗi khi kết nối backend, hãy thêm các tác vụ bất đồng bộ vào trong provider.
export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.product._id === product._id
      );
      if (existingItemIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...state, { product, quantity }];
      }
    }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.product._id !== action.payload);
    case "CLEAR_CART":
      return [];
    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      const updatedCart = state.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      );
      return updatedCart;
    }
    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }
};
