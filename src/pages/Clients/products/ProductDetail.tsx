import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../interfaces/Product";

import instance from "../../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Product Detail</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product --> */}
      <section className="section-product padding-t-100">
        <div className="container">
          <div
            className="row mb-minus-24"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <div className="col-xxl-4 col-xl-5 col-md-6 col-12 mb-24">
              <div className="vehicle-detail-banner banner-content clearfix">
                <div className="banner-slider">
                  <div className="slider slider-for">
                    <div className="slider-banner-image">
                      <div className="zoom-image-hover">
                        {product && (
                          <img
                            src={product.images}
                            alt={product.title}
                            className="product-image"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-7 col-md-6 col-12 mb-24">
              <div className="cr-size-and-weight-contain">
                <h2 className="heading">{product?.title || "Product Title"}</h2>
                <p>
                  {product?.description || "Product description not available."}
                </p>
              </div>
              <div className="cr-size-and-weight">
                <div className="cr-review-star">
                  <div className="cr-star">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <p>(75 Review)</p>
                </div>
                {/* <div className="list">
                  <ul>
                    <li>
                      <label>
                        Brand <span>:</span>
                      </label>
                      {product?.brand || "Brand Name"}
                    </li>
                    <li>
                      <label>
                        Flavour <span>:</span>
                      </label>
                      {product?.flavour || "Flavour"}
                    </li>
                    <li>
                      <label>
                        Diet Type <span>:</span>
                      </label>
                      {product?.dietType || "Diet Type"}
                    </li>
                    <li>
                      <label>
                        Weight <span>:</span>
                      </label>
                      {product?.weight || "Weight"}
                    </li>
                    <li>
                      <label>
                        Speciality <span>:</span>
                      </label>
                      {product?.speciality || "Speciality"}
                    </li>
                    <li>
                      <label>
                        Info <span>:</span>
                      </label>
                      {product?.info || "Additional Info"}
                    </li>
                    <li>
                      <label>
                        Items <span>:</span>
                      </label>
                      {product?.items || "Items"}
                    </li>
                  </ul>
                </div> */}
                <div className="cr-product-price">
                  <span className="new-price">${product?.price || "0.00"}</span>
                  {/* Uncomment if you have an old price */}
                  {/* <span className="old-price">${product?.oldPrice || "0.00"}</span> */}
                </div>
                <div className="cr-add-card">
                  <div className="cr-qty-main">
                    <input
                      type="text"
                      placeholder="."
                      value="1"
                      className="quantity"
                      readOnly
                    />
                    <button type="button" className="plus" disabled>
                      +
                    </button>
                    <button type="button" className="minus" disabled>
                      -
                    </button>
                  </div>
                  <div className="cr-add-button">
                    <button type="button" className="cr-button cr-shopping-bag">
                      Add to cart
                    </button>
                  </div>
                  <div className="cr-card-icon">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <div className="col-12">
              <div className="cr-paking-delivery">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#description"
                      type="button"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="additional-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#additional"
                      type="button"
                      role="tab"
                      aria-controls="additional"
                      aria-selected="false"
                    >
                      Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="cr-tab-content">
                      <div className="cr-description">
                        <p>
                          {product?.description || "Description not available."}
                        </p>
                      </div>
                      <h4 className="heading">Packaging & Delivery</h4>
                      <div className="cr-description">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Error in vero perferendis dolor! Quis vel
                          consequuntur repellat distinctio rem. Corrupti ratione
                          alias odio, error dolore temporibus consequatur, nobis
                          veniam odit laborum dignissimos consectetur quae vero
                          in perferendis provident quis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="additional"
                    role="tabpanel"
                    aria-labelledby="additional-tab"
                  >
                    <div className="cr-tab-content">
                      <div className="cr-description">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Error in vero sapiente doloribus debitis
                          corporis, porro delectus nesciunt facilis sit aut
                          minus sequi deserunt in et expedita suscipit ratione
                          aliquid temporibus quisquam! Quasi, distinctio non
                          nostrum eos dolorem rem assumenda!
                        </p>
                      </div>
                      <div className="cr-description">
                        <ul>
                          <li>100% Organic</li>
                          <li>Non-GMO</li>
                          <li>Gluten-Free</li>
                          <li>Vegan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="cr-tab-content">
                      <div className="cr-review-content">
                        <div className="cr-review-content-item">
                          <div className="cr-review-content-item-content">
                            <p>
                              "Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit."
                            </p>
                            <h4 className="cr-review-author">John Doe</h4>
                            <span className="cr-review-date">
                              July 27, 2024
                            </span>
                          </div>
                        </div>
                        {/* Additional reviews can be added here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Quick View Modal --> */}
      <div
        className="modal fade"
        id="quickview"
        tabIndex={-1}
        aria-labelledby="quickviewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="quickviewLabel">
                Quick View
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* You can add more detailed information or features here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
