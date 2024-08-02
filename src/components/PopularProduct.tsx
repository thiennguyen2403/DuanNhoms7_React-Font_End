import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Category } from "../interfaces/Category";
import instance from "../api";
import { Product } from "../interfaces/Product";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const PopularProduct = () => {
  const { state } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const topThreeProducts = state.products.slice(0, 3);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/categories`);
        setCategories(data.data);
      } catch (error) {
        console.error("Không thể lấy danh mục:", error);
      }
    })();
  }, []);

  if (!state || !Array.isArray(state.products)) {
    return <div>Đang tải...</div>;
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  const handleCategorySelect = (category: string | undefined) => {
    setSelectedCategory(category);
  };

  // Kiểm tra để đảm bảo `product.category` không phải là `undefined` trước khi truy cập `_id`
  const filteredProducts = state.products.filter(
    (product) => product.category?._id === selectedCategory
  );

  return (
    <>
      <section className="section-popular-product-shape padding-b-100">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-30">
                <div className="cr-banner">
                  <h2>Sản phẩm phổ biến</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-content row mb-minus-24" id="MixItUpDA2FB7">
            <div className="col-xl-3 col-lg-4 col-12 mb-24">
              <div className="row mb-minus-24 sticky">
                <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24">
                  <div className="cr-product-tabs">
                    <ul>
                      <li
                        className={
                          selectedCategory === undefined ? "active" : ""
                        }
                        onClick={() => handleCategorySelect(undefined)}
                      >
                        Tất cả
                      </li>
                      {categories.map((item) => (
                        <li
                          key={item._id}
                          className={
                            selectedCategory === item._id ? "active" : ""
                          }
                          onClick={() => handleCategorySelect(item._id)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6 col-6 cr-product-box banner-480 mb-24"></div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-12 mb-24">
              <div className="row mb-minus-24">
                {filteredProducts.map((item) => (
                  <div
                    className="mix vegetable col-xxl-3 col-xl-4 col-6 cr-product-box mb-24"
                    key={item._id}
                  >
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src={item.images} alt={item.title} />
                        </div>
                        <div className="cr-side-view">
                          <a href="javascript:void(0)" className="wishlist">
                            <i className="ri-heart-line"></i>
                          </a>
                          <a
                            className="model-oraganic-product"
                            data-bs-toggle="modal"
                            href="#quickview"
                            role="button"
                          >
                            <i className="ri-eye-line"></i>
                          </a>
                        </div>
                        <a
                          className="cr-shopping-bag"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(item);
                          }}
                        >
                          <i className="ri-shopping-bag-line"></i>
                        </a>
                      </div>
                      <div className="cr-product-details">
                        <div className="cr-brand">
                          <Link to={`/products/${item._id}`}>
                            <h6>{item.title}</h6>
                          </Link>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <p>(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          {item.description}
                        </a>
                        <p className="cr-price">
                          <span className="new-price">${item.price}</span>
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product */}
      <section className="section-product-banner padding-b-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Sản Phẩm Hot</h1>
              <div className="cr-banner-container">
                {topThreeProducts.map((item) => (
                  <div className="cr-product-banner" key={item._id}>
                    <img src={item.images} alt={item.title} />
                    <div className="cr-product-banner-contain">
                      <Link to={`/products/${item._id}`}>
                        <h5>{item.title}</h5>
                      </Link>
                      <p>
                        <span className="percent">30%</span> Giảm
                        <span className="text">trên đơn hàng đầu tiên</span>
                      </p>
                      <div className="cr-product-banner-buttons">
                        <a href="shop-left-sidebar.html" className="cr-button">
                          Mua ngay
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sale */}
      <section className="section-services padding-b-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cr-services-border"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="cr-service-slider swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="cr-services">
                        <div className="cr-services-image">
                          <i className="ri-red-packet-line"></i>
                        </div>
                        <div className="cr-services-contain">
                          <h4>Đóng gói sản phẩm</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services">
                        <div className="cr-services-image">
                          <i className="ri-customer-service-2-line"></i>
                        </div>
                        <div className="cr-services-contain">
                          <h4>Hỗ trợ 24/7</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services">
                        <div className="cr-services-image">
                          <i className="ri-truck-line"></i>
                        </div>
                        <div className="cr-services-contain">
                          <h4>Giao hàng trong 5 ngày</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="cr-services">
                        <div className="cr-services-image">
                          <i className="ri-hand-heart-line"></i>
                        </div>
                        <div className="cr-services-contain">
                          <h4>Sản phẩm thủ công</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
