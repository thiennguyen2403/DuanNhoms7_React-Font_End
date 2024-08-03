import React, { useEffect, useState } from "react";
import instance from "../api";
import { Order } from "../interfaces/Order";

const CartList = () => {
  const [carts, setCarts] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/cart");
        console.log("Dữ liệu từ API:", data);

        if (Array.isArray(data.data)) {
          setCarts(data.data);
        } else {
          console.error("Dữ liệu không phải là một mảng:", data.data);
          setError("Dữ liệu không phải là một mảng.");
        }
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu giỏ hàng:", error);
        setError("Lỗi khi fetch dữ liệu giỏ hàng.");
      }
    })();
  }, []);

  const handleRemoveCart = async (cartId: string) => {
    try {
      const response = await instance.delete(`/cart/${cartId}`);
      if (response.data.success) {
        setCarts(carts.filter((cart) => cart.id !== cartId));
      } else {
        console.error("Không thể xóa giỏ hàng:", response.data.message);
        setError("Không thể xóa giỏ hàng.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa giỏ hàng:", error);
      setError("Lỗi khi xóa giỏ hàng.");
    }
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? "Ngày không hợp lệ" : d.toLocaleDateString();
  };

  const formatPrice = (price: number) => {
    return price ? price.toFixed(2) : "Chưa có thông tin";
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Danh sách giỏ hàng</h2>
      {error && <p className="text-center text-danger">{error}</p>}
      {carts.length === 0 ? (
        <p className="text-center text-muted">Không có giỏ hàng nào.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Giỏ Hàng ID</th>
              <th>User ID</th>
              <th>Sản phẩm</th>
              <th>Tổng Tiền</th>
              <th>Ngày Tạo</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.userId}</td>
                <td>
                  {cart.products && cart.products.length > 0 ? (
                    cart.products.map((item, index) => (
                      <div key={item.product?.id || index}>
                        {item.product?.title}
                      </div>
                    ))
                  ) : (
                    <p>Không có sản phẩm nào.</p>
                  )}
                </td>
                <td>{formatPrice(cart.totalPrice || 0)}</td>
                <td>{formatDate(cart.orderStatus)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveCart(cart.id)}
                  >
                    Xóa Giỏ Hàng
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartList;
