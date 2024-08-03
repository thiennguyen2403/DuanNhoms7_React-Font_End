import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../api";
import { Product } from "../interfaces/Product";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    if (categoryId) {
      (async () => {
        try {
          // Fetch category name
          const { data: categoryData } = await instance.get(
            `/categories/${categoryId}`
          );
          setCategoryName(categoryData.data.title);

          // Fetch products for the category
          const { data: productData } = await instance.get(`/products`, {
            params: { category: categoryId },
          });
          setProducts(productData.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }
  }, [categoryId]);

  return (
    <div className="container mt-4 cartPage">
      <h2>Sản phẩm trong danh mục: {categoryName}</h2>
      <div className="row">
        {products.length === 0 ? (
          <p className="no-products">
            Không có sản phẩm nào trong danh mục này.
          </p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="col-md-4">
              <div className="card">
                <img
                  src={product.images}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price} VND</p>
                  <Link to={`/products/${product._id}`}>Xem Chi Tiết</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
