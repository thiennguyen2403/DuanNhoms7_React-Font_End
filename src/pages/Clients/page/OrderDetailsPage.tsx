import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../../interfaces/Product";

interface ProductItem {
  product?: Product;
  quantity: number;
}

interface OrderDetailsState {
  products: ProductItem[];
  totalPrice: number;
  orderStatus: string;
}

const OrderDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as OrderDetailsState | undefined;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

  return (
    <div className="container mt-5 p-4">
      <h1 className="text-center mb-4 fix">Chi tiết đơn hàng</h1>
      <p className="text-center">Đơn hàng của bạn đã được đặt thành công!</p>
      <p className="text-center font-weight-bold">
        Trạng thái đơn hàng: {state.orderStatus}
      </p>

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
          {state.products.map((item, index: number) => (
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
            <td>{state.totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsPage;
