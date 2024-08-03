import React, { useEffect, useState } from "react";
import { Product } from "../../../interfaces/Product";

interface Order {
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

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Lấy userId từ localStorage
    const user = localStorage.getItem("user");
    const storedUserId = user ? JSON.parse(user)._id : null;

    // Fetch order history from local storage
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    // Chỉ lấy các đơn hàng của người dùng hiện tại
    if (storedUserId) {
      const userOrders = storedOrders.filter(
        (order: Order) => order.userId === storedUserId
      );
      setOrders(userOrders);
    }
  }, []);

  return (
    <div className="container mt-5 p-4">
      <h1 className="text-center mb-4 fix">Lịch sử đơn hàng</h1>
      {orders.length === 0 ? (
        <p className="text-center">Bạn chưa có đơn hàng nào.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>
                  {order.products.map((item, index) => (
                    <div key={index}>
                      {item.product.title} (x{item.quantity})
                    </div>
                  ))}
                </td>
                <td>{order.totalPrice}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryPage;
