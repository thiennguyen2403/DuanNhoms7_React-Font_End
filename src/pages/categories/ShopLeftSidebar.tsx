import React from "react";

interface Props {}

const ShopLeftSidebar = (props: Props) => {
  return (
    <>
      <body className="body-bg-6">
        
        {/* mobile */}
        <div className="cr-sidebar-overlay"></div>
        <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
          <div className="cr-menu-title">
            <span className="menu-title">My Menu</span>
            <button type="button" className="cr-close">
              ×
            </button>
          </div>
          <div className="cr-menu-inner">
            <div className="cr-menu-content">
              <ul>
                <li className="dropdown drop-list">
                  <a href="index.html">Home</a>
                </li>
                <li className="dropdown drop-list">
                  <span className="menu-toggle"></span>
                  <a href="javascript:void(0)" className="dropdown-list">
                    Category
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop-left-sidebar.html">Shop Left sidebar</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Shop Right sidebar</a>
                    </li>
                    <li>
                      <a href="shop-full-width.html">Full Width</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list">
                  <span className="menu-toggle"></span>
                  <a href="javascript:void(0)" className="dropdown-list">
                    product
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="product-left-sidebar.html">
                        product Left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-right-sidebar.html">
                        product Right sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-full-width.html">Product Full Width </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list">
                  <span className="menu-toggle"></span>
                  <a href="javascript:void(0)" className="dropdown-list">
                    Pages
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="track-order.html">Track Order</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="policy.html">Policy</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list">
                  <span className="menu-toggle"></span>
                  <a href="javascript:void(0)" className="dropdown-list">
                    Blog
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-left-sidebar.html">Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-full-width.html">Full Width</a>
                    </li>
                    <li>
                      <a href="blog-detail-left-sidebar.html">
                        Detail Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail-right-sidebar.html">
                        Detail Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail-full-width.html">
                        Detail Full Width
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown drop-list">
                  <span className="menu-toggle"></span>
                  <a href="javascript:void(0)">Element</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="elements-products.html">Products</a>
                    </li>
                    <li>
                      <a href="elements-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="elements-buttons.html">Buttons</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Breadcrumb --> */}
        <section className="section-breadcrumb">
          <div className="cr-breadcrumb-image">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cr-breadcrumb-title">
                    <h2>Category</h2>
                    <span>
                      {" "}
                      <a href="index.html">Home</a> - Shop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Shop --> */}
        <section className="section-shop padding-tb-100">
          <div className="container">
            <div className="row d-none">
              <div className="col-lg-12">
                <div
                  className="mb-30"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                >
                  <div className="cr-banner">
                    <h2>Categories</h2>
                  </div>
                  <div className="cr-banner-sub-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore lacus vel
                      facilisis.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-12 md-30"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="cr-shop-sideview">
                  <div className="cr-shop-categories">
                    <h4 className="cr-shop-sub-title">Category</h4>
                    <div className="cr-checkbox">
                      <div className="checkbox-group">
                        <input type="checkbox" id="drinks" />
                        <label>Juice & Drinks</label>
                        <span>[20]</span>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="drinks1" />
                        <label>Dairy & Milk</label>
                        <span>[54]</span>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="drinks2" />
                        <label>Snack & Spice</label>
                        <span>[64]</span>
                      </div>
                    </div>
                  </div>
                  <div className="cr-shop-price">
                    <h4 className="cr-shop-sub-title">Price</h4>
                    <div className="price-range-slider">
                      <div id="slider-range" className="range-bar"></div>
                      <p className="range-value">
                        <label>Price :</label>
                        <input type="text" id="amount" placeholder="'" />
                      </p>
                      <button type="button" className="cr-button">
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className="cr-shop-color">
                    <h4 className="cr-shop-sub-title">Colors</h4>
                    <div className="cr-checkbox">
                      <div className="checkbox-group">
                        <input type="checkbox" id="blue" />
                        <label>Blue</label>
                        <span className="blue"></span>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="yellow" />
                        <label>Yellow</label>
                        <span className="yellow"></span>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="red" />
                        <label>Red</label>
                        <span className="red"></span>
                      </div>
                    </div>
                  </div>
                  <div className="cr-shop-weight">
                    <h4 className="cr-shop-sub-title">Weight</h4>
                    <div className="cr-checkbox">
                      <div className="checkbox-group">
                        <input type="checkbox" id="2kg" />
                        <label>2kg Pack</label>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="20kg" />
                        <label>20kg Pack</label>
                      </div>
                      <div className="checkbox-group">
                        <input type="checkbox" id="30kg" />
                        <label>30kg pack</label>
                      </div>
                    </div>
                  </div>
                  <div className="cr-shop-tags">
                    <h4 className="cr-shop-sub-title">Tages</h4>
                    <div className="cr-shop-tags-inner">
                      <ul className="cr-tags">
                        <li>
                          <a href="javascript:void(0)">Vegetables</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">juice</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Food</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Dry Fruits</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Vegetables</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">juice</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-9 col-12 md-30"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="cr-shop-bredekamp">
                      <div className="cr-toggle">
                        <a
                          href="javascript:void(0)"
                          className="gridCol active-grid"
                        >
                          <i className="ri-grid-line"></i>
                        </a>
                        <a href="javascript:void(0)" className="gridRow">
                          <i className="ri-list-check-2"></i>
                        </a>
                      </div>
                      <div className="center-content">
                        <span>We found 29 items for you!</span>
                      </div>
                      <div className="cr-select">
                        <label>Sort By :</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Featured</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row col-100 mb-minus-24">
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/1.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Vegetables</a>
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
                          Fresh organic villa farm lomon 500gm pack
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$120.25</span>{" "}
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/9.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Snacks</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Best snakes with hazel nut pack 200gm
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$145</span>{" "}
                          <span className="old-price">$150</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/2.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Fruits</a>
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
                          Fresh organic apple 1kg simla marming
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$120.25</span>{" "}
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/3.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Fruits</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <i className="ri-star-line"></i>
                            <p>(3.2)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Organic fresh venila farm watermelon 5kg
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$50.30</span>{" "}
                          <span className="old-price">$72.60</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src="assets/img/product/10.jpg"
                            alt="product-1"
                          />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Snacks</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Sweet crunchy nut mix 250gm pack
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$120.25</span>{" "}
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src="assets/img/product/17.jpg"
                            alt="product-1"
                          />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Bakery</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Delicious white baked fresh bread and toast
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$20</span>{" "}
                          <span className="old-price">$22.10</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src="assets/img/product/13.jpg"
                            alt="product-1"
                          />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Bakery</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Delicious white baked fresh bread and toast
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$20</span>{" "}
                          <span className="old-price">$22.10</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src="assets/img/product/11.jpg"
                            alt="product-1"
                          />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Bakery</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Delicious white baked fresh bread and toast
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$20</span>{" "}
                          <span className="old-price">$22.10</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src="assets/img/product/12.jpg"
                            alt="product-1"
                          />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Bakery</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Delicious white baked fresh bread and toast
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$20</span>{" "}
                          <span className="old-price">$22.10</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/1.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Vegetables</a>
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
                          Fresh organic villa farm lomon 500gm pack
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$120.25</span>{" "}
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/9.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Snacks</a>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <p>(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title">
                          Best snakes with hazel nut pack 200gm
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$145</span>{" "}
                          <span className="old-price">$150</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img src="assets/img/product/2.jpg" alt="product-1" />
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
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html">Fruits</a>
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
                          Fresh organic apple 1kg simla marming
                        </a>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore lacus
                          vel facilisis.
                        </p>
                        <ul className="list">
                          <li>
                            <label>Brand :</label>ESTA BETTERU CO
                          </li>
                          <li>
                            <label>Diet Type :</label>Vegetarian
                          </li>
                          <li>
                            <label>Speciality :</label>Gluten Free, Sugar Free
                          </li>
                        </ul>
                        <p className="cr-price">
                          <span className="new-price">$120.25</span>{" "}
                          <span className="old-price">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="..." className="cr-pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer className="footer padding-t-100 bg-off-white">
          <div className="container">
            <div className="row footer-top padding-b-100">
              <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
                <div className="cr-footer-logo">
                  <div className="image">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="logo"
                      className="logo"
                    />
                    <img
                      src="assets/img/logo/dark-logo.png"
                      alt="logo"
                      className="dark-logo"
                    />
                  </div>
                  <p>
                    Carrot is the biggest market of grocery products. Get your
                    daily needs from our store.
                  </p>
                </div>
                <div className="cr-footer">
                  <h4 className="cr-sub-title cr-title-hidden">
                    Contact us
                    <span className="cr-heading-res"></span>
                  </h4>
                  <ul className="cr-footer-links cr-footer-dropdown">
                    <li className="location-icon">
                      51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                      4783, USA.
                    </li>
                    <li className="mail-icon">
                      <a href="javascript:void(0)">example@email.com</a>
                    </li>
                    <li className="phone-icon">
                      <a href="javascript:void(0)"> +91 123 4567890</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                <div className="cr-footer">
                  <h4 className="cr-sub-title">
                    Company
                    <span className="cr-heading-res"></span>
                  </h4>
                  <ul className="cr-footer-links cr-footer-dropdown">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="track-order.html">Delivery Information</a>
                    </li>
                    <li>
                      <a href="policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms.html">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="contact-us.html">contact Us</a>
                    </li>
                    <li>
                      <a href="faq.html">Support Center</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                <div className="cr-footer">
                  <h4 className="cr-sub-title">
                    Category
                    <span className="cr-heading-res"></span>
                  </h4>
                  <ul className="cr-footer-links cr-footer-dropdown">
                    <li>
                      <a href="shop-left-sidebar.html">Dairy & Bakery</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Fruits & Vegetable</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Snack & Spice</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Juice & Drinks</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Chicken & Meat</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Fast Food</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
                <div className="cr-footer cr-newsletter">
                  <h4 className="cr-sub-title">
                    Subscribe Our Newsletter
                    <span className="cr-heading-res"></span>
                  </h4>
                  <div className="cr-footer-links cr-footer-dropdown">
                    <form className="cr-search-footer">
                      <input
                        className="search-input"
                        type="text"
                        placeholder="Search here..."
                      />
                      <a href="javascript:void(0)" className="search-btn">
                        <i className="ri-send-plane-fill"></i>
                      </a>
                    </form>
                  </div>
                  <div className="cr-social-media">
                    <span>
                      <a href="javascript:void(0)">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="javascript:void(0)">
                        <i className="ri-twitter-x-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="javascript:void(0)">
                        <i className="ri-dribbble-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="javascript:void(0)">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                  </div>
                  <div className="cr-payment">
                    <div className="cr-insta-slider swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/1.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/2.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/3.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/4.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/5.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/6.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/7.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#" className="cr-payment-image">
                            <img src="assets/img/insta/8.jpg" alt="insta" />
                            <div className="payment-overlay"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cr-last-footer">
              <p>
                &copy; <span id="copyright_year"></span>{" "}
                <a href="index.html">Carrot</a>, All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        {/* <!-- Tab to top --> */}
        <a href="#Top" className="back-to-top result-placeholder">
          <i className="ri-arrow-up-line"></i>
          <div className="back-to-top-wrap">
            <svg viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </a>
        {/* <!-- Model --> */}
        <div
          className="modal fade quickview-modal"
          id="quickview"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered cr-modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="cr-close-model btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="zoom-image-hover modal-border-image">
                      <img
                        src="assets/img/product/tab-1.jpg"
                        alt="product-tab-2"
                        className="product-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="cr-size-and-weight-contain">
                      <h2 className="heading">
                        Peach Seeds Of Change Oraganic Quinoa, Brown fruit
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1900s,
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
                        <p>( 75 Review )</p>
                      </div>
                      <div className="cr-product-price">
                        <span className="new-price">$120.25</span>
                        <span className="old-price">$123.25</span>
                      </div>
                      <div className="cr-size-weight">
                        <h5>
                          <span>Size</span>/<span>Weight</span> :
                        </h5>
                        <div className="cr-kg">
                          <ul>
                            <li className="active-color">500gm</li>
                            <li>1kg</li>
                            <li>2kg</li>
                            <li>5kg</li>
                          </ul>
                        </div>
                      </div>
                      <div className="cr-add-card">
                        <div className="cr-qty-main">
                          <input
                            type="text"
                            placeholder="."
                            value="1"
                            className="quantity"
                          />
                          <button type="button" id="add_model" className="plus">
                            +
                          </button>
                          <button
                            type="button"
                            id="sub_model"
                            className="minus"
                          >
                            -
                          </button>
                        </div>
                        <div className="cr-add-button">
                          <button type="button" className="cr-button">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Cart --> */}
        <div className="cr-cart-overlay"></div>
        <div className="cr-cart-view">
          <div className="cr-cart-inner">
            <div className="cr-cart-top">
              <div className="cr-cart-title">
                <h6>My Cart</h6>
                <button type="button" className="close-cart">
                  ×
                </button>
              </div>
              <ul className="crcart-pro-items">
                <li>
                  <a
                    href="product-left-sidebar.html"
                    className="crside_pro_img"
                  >
                    <img src="assets/img/product/4.jpg" alt="product-1" />
                  </a>
                  <div className="cr-pro-content">
                    <a
                      href="product-left-sidebar.html"
                      className="cart_pro_title"
                    >
                      Fresh Pomegranate
                    </a>
                    <span className="cart-price">
                      <span>$56.00</span> x 1kg
                    </span>
                    <div className="cr-cart-qty">
                      <div className="cart-qty-plus-minus">
                        <button type="button" className="plus">
                          +
                        </button>
                        <input
                          type="text"
                          placeholder="."
                          value="1"
                          className="quantity"
                        />
                        <button type="button" className="minus">
                          -
                        </button>
                      </div>
                    </div>
                    <a href="javascript:void(0)" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="product-left-sidebar.html"
                    className="crside_pro_img"
                  >
                    <img src="assets/img/product/2.jpg" alt="product-2" />
                  </a>
                  <div className="cr-pro-content">
                    <a
                      href="product-left-sidebar.html"
                      className="cart_pro_title"
                    >
                      Green Apples
                    </a>
                    <span className="cart-price">
                      <span>$75.00</span> x 1kg
                    </span>
                    <div className="cr-cart-qty">
                      <div className="cart-qty-plus-minus">
                        <button type="button" className="plus">
                          +
                        </button>
                        <input
                          type="text"
                          placeholder="."
                          value="1"
                          className="quantity"
                        />
                        <button type="button" className="minus">
                          -
                        </button>
                      </div>
                    </div>
                    <a href="javascript:void(0)" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="product-left-sidebar.html"
                    className="crside_pro_img"
                  >
                    <img src="assets/img/product/3.jpg" alt="product-3" />
                  </a>
                  <div className="cr-pro-content">
                    <a
                      href="product-left-sidebar.html"
                      className="cart_pro_title"
                    >
                      Watermelon - Small
                    </a>
                    <span className="cart-price">
                      <span>$48.00</span> x 5kg
                    </span>
                    <div className="cr-cart-qty">
                      <div className="cart-qty-plus-minus">
                        <button type="button" className="plus">
                          +
                        </button>
                        <input
                          type="text"
                          placeholder="."
                          value="1"
                          className="quantity"
                        />
                        <button type="button" className="minus">
                          -
                        </button>
                      </div>
                    </div>
                    <a href="javascript:void(0)" className="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cr-cart-bottom">
              <div className="cart-sub-total">
                <table className="table cart-table">
                  <tbody>
                    <tr>
                      <td className="text-left">Sub-Total :</td>
                      <td className="text-right">$300.00</td>
                    </tr>
                    <tr>
                      <td className="text-left">VAT (20%) :</td>
                      <td className="text-right">$60.00</td>
                    </tr>
                    <tr>
                      <td className="text-left">Total :</td>
                      <td className="text-right primary-color">$360.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart_btn">
                <a href="cart.html" className="cr-button">
                  View Cart
                </a>
                <a href="checkout.html" className="cr-btn-secondary">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Side-tool --> */}
        <div className="cr-tool-overlay"></div>
        <div className="cr-tool">
          <div className="cr-tool-btn">
            <a
              href="javascript:void(0)"
              className="btn-cr-tool result-placeholder"
            >
              <i className="ri-settings-line"></i>
            </a>
            <div className="color-variant">
              <div className="cr-bar-title">
                <h6>Tools</h6>
                <a href="javascript:void(0)" className="close-tools">
                  <i className="ri-close-line"></i>
                </a>
              </div>
              <div className="cr-tools-detail">
                <div className="heading">
                  <h2>Select Color</h2>
                </div>
                <ul className="cr-color">
                  <li className="colors c1 active-colors"></li>
                  <li className="colors c2"></li>
                  <li className="colors c3"></li>
                  <li className="colors c4"></li>
                  <li className="colors c5"></li>
                  <li className="colors c6"></li>
                  <li className="colors c7"></li>
                  <li className="colors c8"></li>
                  <li className="colors c9"></li>
                  <li className="colors c10"></li>
                </ul>
              </div>
              <div className="cr-tools-detail">
                <div className="heading">
                  <h2>Dark mode</h2>
                </div>
                <ul className="dark-mode">
                  <li className="dark"></li>
                  <li className="white active-dark-mode"></li>
                </ul>
              </div>
              <div className="cr-tools-detail">
                <div className="heading">
                  <h2>Backgrounds</h2>
                </div>
                <ul className="bg-panel">
                  <li className="bg-1">
                    <img
                      src="assets/img/shape/bg-shape-1.png"
                      alt="bg-shape-1"
                    />
                  </li>
                  <li className="bg-2">
                    <img
                      src="assets/img/shape/bg-shape-2.png"
                      alt="bg-shape-2"
                    />
                  </li>
                  <li className="bg-3">
                    <img
                      src="assets/img/shape/bg-shape-3.png"
                      alt="bg-shape-3"
                    />
                  </li>
                  <li className="bg-4">
                    <img
                      src="assets/img/shape/bg-shape-4.png"
                      alt="bg-shape-4"
                    />
                  </li>
                  <li className="bg-5">
                    <img
                      src="assets/img/shape/bg-shape-5.png"
                      alt="bg-shape-5"
                    />
                  </li>
                  <li className="bg-6 active-bg-panel">
                    <img
                      src="assets/img/shape/bg-shape-6.png"
                      alt="bg-shape-6"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Vendor Custom --> */}
        <script src="assets/js/vendor/jquery-3.6.4.min.js"></script>
        <script src="assets/js/vendor/jquery.zoom.min.js"></script>
        <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
        <script src="assets/js/vendor/mixitup.min.js"></script>
        <script src="assets/js/vendor/range-slider.js"></script>
        <script src="assets/js/vendor/aos.min.js"></script>
        <script src="assets/js/vendor/swiper-bundle.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>

        {/* <!-- Main Custom --> */}
        <script src="assets/js/main.js"></script>
      </body>
    </>
  );
};

export default ShopLeftSidebar;
