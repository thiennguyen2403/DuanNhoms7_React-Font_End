import { ReactNode, useEffect, useReducer, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/Product";
import productReducer from "../reducers/productReducer";
import { instance } from "../api";
import axios from "axios";
type ProductContextType = {
  state: { products: Product[] };
  handleRemove: (id: string) => void; // Đổi kiểu dữ liệu thành string
  handleProduct: (product: Product) => void;
};

const initialState = { products: [] };

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await instance.get("/products");
        const data = response.data;
        if (data.success && Array.isArray(data.data)) {
          dispatch({ type: "SET_PRODUCTS", payload: data.data });
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    })();
  }, []);

  const handleRemove = async (id: string) => {
    // Đổi kiểu dữ liệu thành string
    try {
      await instance.delete(`/products/${id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };
  const handleProduct = async (product: Product) => {
    try {
      const { id, ...productData } = product;

      if (id) {
        const response = await instance.patch(`/products/${id}`, productData);
        dispatch({ type: "UPDATE_PRODUCT", payload: response.data });
      } else {
        const response = await instance.post("/products", productData);
        dispatch({ type: "ADD_PRODUCT", payload: response.data });
      }
      nav("/admin");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <ProductContext.Provider value={{ state, handleRemove, handleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
