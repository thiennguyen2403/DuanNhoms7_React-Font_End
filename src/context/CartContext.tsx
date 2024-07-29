import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "../interfaces/Product";
import { CartItem } from "../interfaces/CartItem";
import instance from "../api";
import { AxiosError } from "axios";

// Định nghĩa kiểu dữ liệu cho Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: { product: Product; quantity: number }) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

// Khởi tạo Context với giá trị mặc định là undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

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

// Reducer để xử lý các hành động
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.findIndex(
        (item) => item.product._id === action.payload.product._id
      );
      if (existingItemIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
        return [
          ...state,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        ];
      }
    }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.product._id !== action.payload);
    case "CLEAR_CART":
      return [];
    case "UPDATE_QUANTITY": {
      const updatedCart = state.map((item) =>
        item.product._id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return updatedCart;
    }
    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }
};

// Định nghĩa kiểu Props cho CartProvider
interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Retrieve userId from localStorage
  const getUserId = () => localStorage.getItem("userId") || "defaultUserId";

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = getUserId();
        const { data } = await instance.get(`/cart/${userId}`);
        dispatch({ type: "LOAD_CART", payload: data });
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    // Optionally, you can handle side-effects here like saving to local storage if needed
  }, [cart]);

  const addToCart = async ({
    product,
    quantity,
  }: {
    product: Product;
    quantity: number;
  }) => {
    try {
      const userId = getUserId();
      await instance.post("/cart", {
        userId,
        productId: product._id,
        quantity,
      });
      dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      const userId = getUserId();
      const response = await instance.delete(
        `/cart/user/${userId}/product/${id}`
      );

      if (response.status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      } else {
        console.error(
          `Không thể xóa khỏi giỏ hàng, server trả về mã trạng thái: ${response.status}. Dữ liệu phản hồi: ${response.data}`
        );
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        // Xử lý lỗi đặc thù của Axios
        console.error(
          `Không thể xóa khỏi giỏ hàng. Trạng thái: ${
            error.response?.status
          }. Dữ liệu: ${JSON.stringify(error.response?.data)}`
        );
      } else {
        // Xử lý lỗi không mong muốn
        console.error("Đã xảy ra lỗi không mong muốn:", error);
      }
    }
  };

  const clearCart = async () => {
    try {
      const userId = getUserId();
      const response = await instance.delete(`/cart/${userId}`);
      if (response.status === 200) {
        dispatch({ type: "CLEAR_CART" });
      } else {
        console.error(
          "Failed to clear cart, server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      const userId = getUserId();
      const response = await instance.put(
        `/cart/${userId}/product/${productId}`,
        {
          quantity,
        }
      );
      if (response.status === 200) {
        dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
      } else {
        console.error(
          "Failed to update quantity, server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để sử dụng CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
