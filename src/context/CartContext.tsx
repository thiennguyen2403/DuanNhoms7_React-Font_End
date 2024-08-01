/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer, ReactNode } from "react";
import { Product } from "../interfaces/Product";
import cartReducer from "../reduces/cartReducer";
import instance from "../api";

export type CartContextType = {
  state: {
    products: { product: Product; quantity: number }[];
    totalPrice: number;
  };

  dispatch: React.Dispatch<any>;
  addToCart: (product: Product, quantity: number) => void;
  getCart: () => void;
  checkout: () => void;
  removeFromCart: (productId: string) => void;
};

const initialState = {
  products: [],
  totalPrice: 0,
};

const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = async (product: Product, quantity: number) => {
    try {
      const res = await instance.post("/cart", { product, quantity });

      if (res.data) {
        console.log("Dispatching action with product:", res.data.data.products);
        dispatch({
          type: "ADD_TO_CART",
          payload: { product, quantity },
        });
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const getCart = async () => {
    const res = await instance.get("/cart");
    dispatch({ type: "SET_CART", payload: res.data });
  };
  const checkout = async () => {
    const res = await instance.post("/cart/checkout");
    dispatch({ type: "CHECKOUT", payload: res.data });
  };

  const removeFromCart = async (productId: string) => {
    const res = await instance.delete(`/cart/product/${productId}`);
    res.data.success &&
      dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, addToCart, getCart, checkout, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
