import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../../interfaces/Product";

interface ProductItem {
  product?: Product;
  quantity: number;
}

interface LocationState {
  products: ProductItem[];
  totalPrice: number;
}

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const { products, totalPrice } = state || {
    products: [],
    totalPrice: 0,
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "cod") {
      alert("Đặt hàng thành công!");

      // Create order object
      const order = {
        id: new Date().toISOString(), // Unique ID for the order
        products,
        totalPrice,
        orderStatus: "Pending",
        date: new Date().toISOString().split("T")[0], // Only date part
      };

      // Store order in local storage
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, order])
      );

      // Redirect to order details
      navigate("/order-details", {
        state: {
          products,
          totalPrice,
          orderStatus: "Pending",
        },
      });
    }
  };

  return (
    <div className="container mt-5 p-4">
      <h1 className="text-center mb-4 fix">Thông tin đơn hàng</h1>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá</th>
            <th scope="col">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index: number) => (
            <tr key={item.product?._id || index}>
              <td>{index + 1}</td>
              <td>{item.product?.title || "Không có tiêu đề"}</td>
              <td>{item.quantity}</td>
              <td>{item.product?.price || 0}</td>
              <td>{(item.product?.price || 0) * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="font-weight-bold text-right">
              Tổng tiền
            </td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4">
        <h4>Phương thức thanh toán</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="onlinePayment"
            value="online"
            onChange={handlePaymentChange}
          />
          <label className="form-check-label" htmlFor="onlinePayment">
            Thanh toán online
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="codPayment"
            value="cod"
            onChange={handlePaymentChange}
          />
          <label className="form-check-label" htmlFor="codPayment">
            Thanh toán khi nhận hàng
          </label>
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={handlePlaceOrder}
        disabled={!paymentMethod}
      >
        Đặt hàng
      </button>
    </div>
  );
};

export default CheckoutPage;
