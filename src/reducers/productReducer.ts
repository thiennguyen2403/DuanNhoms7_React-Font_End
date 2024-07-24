import { Product } from "../interfaces/Product";

// Định nghĩa kiểu dữ liệu của các hành động
type Action =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "DELETE_PRODUCT"; payload: string } // Thay đổi kiểu dữ liệu thành `string`
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product };

const productReducer = (state: { products: Product[] }, action: Action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
