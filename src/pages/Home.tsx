import React from "react";
import { Product } from "../interfaces/Product";

interface Prop {
  product: Product[];
}

const Home = ({ product }: Prop) => {
  return (
    <div className="container text-center my-4">
      <h1>Danh Sách Sản Phẩm</h1>
      <div className="row">
        {product.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                src={item.images}
                className="img-thumbnail-custom"
                alt={item.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text price">${item.price}</p>
                <button className="btn btn-primary me-2">
                  <i className="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                </button>
                <button className="btn btn-success">
                  <i className="fas fa-credit-card"></i> Mua ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
