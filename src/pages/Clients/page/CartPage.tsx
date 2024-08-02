import React, { useContext } from "react";
import { CartContext, CartContextType } from "../../../context/CartContext";
import { CartItem } from "../../../reduces/cartReducer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const nav = useNavigate();
  const { state, removeFromCart } = useContext(CartContext) as CartContextType;

  if (!state.products || state.products.length === 0) {
    return (
      <>
        <h1 className="empty-cart-message">Giỏ hàng của bạn trống!</h1>;
      </>
    );
  }
  const handleCheckout = () => {
    nav("/checkout", {
      state: {
        products: state.products,
        totalPrice: state.totalPrice,
      },
    });
  };
  return (
    <div className="cart-container">
      <h1>Giỏ hàng của bạn!</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Hình Ảnh</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product: CartItem, index: number) => (
            <tr key={product.product?._id || index}>
              <td>{index + 1}</td>
              <td>{product.product?.title || "Không có tiêu đề"}</td>
              <td>
                <img
                  src={product.product?.images}
                  alt="Hình ảnh"
                  className="img-fluid"
                  style={{ width: "80px", height: "auto" }}
                />
              </td>
              <td>{product.quantity}</td>
              <td>{product.product?.price || 0}</td>
              <td>{(product.product?.price || 0) * product.quantity}</td>
              <td>
                <button
                  onClick={() => removeFromCart(String(product.product?._id))}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="cart-total">
              Tổng tiền
            </td>
            <td>{state.totalPrice}</td>
            <td>
              <button onClick={handleCheckout} className="btn btn-success">
                Thanh toán
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
