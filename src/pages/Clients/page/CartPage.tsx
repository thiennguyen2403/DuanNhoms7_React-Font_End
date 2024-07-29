import React from "react";
import { useCart } from "../../../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    // Cập nhật số lượng chỉ khi giá trị là số và lớn hơn 0
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const handleInputChange = (productId: string, value: string) => {
    // Chuyển giá trị input thành số nguyên và kiểm tra hợp lệ
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      handleQuantityChange(productId, quantity);
    }
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th className="text-center">Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.product._id}>
                <td>
                  <img
                    src={item.product.images}
                    alt={item.product.title}
                    width="100"
                  />
                  {item.product.title}
                </td>
                <td>${item.product.price}</td>
                <td>
                  <div className="input-group">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        handleQuantityChange(
                          item.product._id,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleInputChange(item.product._id, e.target.value)
                      }
                    />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        handleQuantityChange(
                          item.product._id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <button className="btn btn-warning" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartPage;
