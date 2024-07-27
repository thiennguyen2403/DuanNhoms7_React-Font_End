import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Category } from "../interfaces/Category";
import instance from "../api";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const { state } = useContext(ProductContext);
  const [categories, setCategories] = useState<Category[]>([]);
  const topThreeProducts = state.products.slice(0, 3);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/categories`);
        console.log(data.data);
        setCategories(data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    })();
  }, []);

  if (!state || !Array.isArray(state.products)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="section-popular-product-shape padding-b-100">
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-30">
                <div className="cr-banner">
                  <h2>Popular Products</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.
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
                      <li className="active" data-filter="all">
                        All
                      </li>
                      {categories.map((item) => (
                        <li key={item._id} data-filter={`.${item.title}`}>
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
                {state.products.map((item) => (
                  <div
                    className="mix vegetable col-xxl-3 col-xl-4 col-6 cr-product-box mb-24"
                    key={item.id}
                  >
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src={item.images} alt="product-1" />
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
                          href="javascript:void(0)"
                        >
                          <i className="ri-shopping-bag-line"></i>
                        </a>
                      </div>
                      <div className="cr-product-details">
                        <div className="cr-brand" key={item._id}>
                          <Link to={`/productdetail/${item._id}`}>
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
                          <span className="new-price">{item.price}</span>
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
                  <div className="cr-product-banner" key={item.id}>
                    <img src={item.images} alt="product-banner" />
                    <div className="cr-product-banner-contain">
                      <Link to={`/productdetail/${item._id}`}>
                        <h5>{item.title}</h5>
                      </Link>
                      <p>
                        <span className="percent">30%</span> Off
                        <span className="text">on first order</span>
                      </p>
                      <div className="cr-product-banner-buttons">
                        <a href="shop-left-sidebar.html" className="cr-button">
                          Shop Now
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
                          <h4>Product Packing</h4>
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
                          <h4>24X7 Support</h4>
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
                          <h4>Delivery in 5 Days</h4>
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
                          <h4>Handmade Products</h4>
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
