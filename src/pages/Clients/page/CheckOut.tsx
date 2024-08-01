import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
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
                    <a href="product-left-sidebar.html">product Left sidebar</a>
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
                    <a href="blog-detail-full-width.html">Detail Full Width</a>
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
                  <h2>Check-Out</h2>
                  <span>
                    {" "}
                    <Link to={"/"}>Home</Link> - Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Checkout section --> */}
      <section className="cr-checkout-section padding-tb-100">
        <div className="container">
          <div className="row">
            {/* <!-- Sidebar Area Start --> */}
            <div className="cr-checkout-rightside col-lg-4 col-md-12">
              <div className="cr-sidebar-wrap">
                {/* <!-- Sidebar Summary Block --> */}
                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Summary</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-summary">
                      <div>
                        <span className="text-left">Sub-Total</span>
                        <span className="text-right">$80.00</span>
                      </div>
                      <div>
                        <span className="text-left">Delivery Charges</span>
                        <span className="text-right">$80.00</span>
                      </div>
                      <div className="cr-checkout-summary-total">
                        <span className="text-left">Total Amount</span>
                        <span className="text-right">$80.00</span>
                      </div>
                    </div>
                    <div className="cr-checkout-pro">
                      <div className="col-sm-12 mb-6">
                        <div className="cr-product-inner">
                          <div className="cr-pro-image-outer">
                            <div className="cr-pro-image">
                              <a
                                href="product-left-sidebar.html"
                                className="image"
                              >
                                <img
                                  className="main-image"
                                  src="assets/img/product/10.jpg"
                                  alt="Product"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="cr-pro-content cr-product-details">
                            <h5 className="cr-pro-title">
                              <a href="product-left-sidebar.html">
                                Dates Value Pack Pouch
                              </a>
                            </h5>
                            <div className="cr-pro-rating">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-line"></i>
                            </div>
                            <p className="cr-price">
                              <span className="new-price">$120.25</span>{" "}
                              <span className="old-price">$123.25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 mb-0">
                        <div className="cr-product-inner">
                          <div className="cr-pro-image-outer">
                            <div className="cr-pro-image">
                              <a
                                href="product-left-sidebar.html"
                                className="image"
                              >
                                <img
                                  className="main-image"
                                  src="assets/img/product/12.jpg"
                                  alt="Product"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="cr-pro-content cr-product-details">
                            <h5 className="cr-pro-title">
                              <a href="product-left-sidebar.html">
                                Smoked Honey Spiced Nuts
                              </a>
                            </h5>
                            <div className="cr-pro-rating">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-line"></i>
                            </div>
                            <p className="cr-price">
                              <span className="new-price">$120.25</span>{" "}
                              <span className="old-price">$123.25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Sidebar Summary Block --> */}
              </div>
              <div className="cr-sidebar-wrap cr-checkout-del-wrap">
                {/* <!-- Sidebar Summary Block --> */}
                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Delivery Method</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-del">
                      <div className="cr-del-desc">
                        Please select the preferred shipping method to use on
                        this order.
                      </div>
                      <form action="#">
                        <span className="cr-del-option">
                          <span>
                            <span className="cr-del-opt-head">
                              Free Shipping
                            </span>
                            <input
                              type="radio"
                              id="del1"
                              name="radio-group"
                              checked
                            />
                            <label>Rate - $0 .00</label>
                          </span>
                          <span>
                            <span className="cr-del-opt-head">Flat Rate</span>
                            <input type="radio" id="del2" name="radio-group" />
                            <label>Rate - $5.00</label>
                          </span>
                        </span>
                        <span className="cr-del-commemt">
                          <span className="cr-del-opt-head">
                            Add Comments About Your Order
                          </span>
                          <textarea
                            name="your-commemt"
                            placeholder="Comments"
                          ></textarea>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Sidebar Summary Block --> */}
              </div>
              <div className="cr-sidebar-wrap cr-checkout-pay-wrap">
                {/* <!-- Sidebar Payment Block --> */}
                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Payment Method</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-pay">
                      <div className="cr-pay-desc">
                        Please select the preferred payment method to use on
                        this order.
                      </div>
                      <form action="#" className="payment-options">
                        <span className="cr-pay-option">
                          <span>
                            <input
                              type="radio"
                              id="pay1"
                              name="radio-group"
                              checked
                            />
                            <label>Cash On Delivery</label>
                          </span>
                        </span>
                        <span className="cr-pay-option">
                          <span>
                            <input type="radio" id="pay2" name="radio-group" />
                            <label>UPI</label>
                          </span>
                        </span>
                        <span className="cr-pay-option">
                          <span>
                            <input type="radio" id="pay3" name="radio-group" />
                            <label>Bank Transfer</label>
                          </span>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Sidebar Payment Block --> */}
              </div>
              <div className="cr-sidebar-wrap cr-check-pay-img-wrap">
                {/* <!-- Sidebar Payment Block --> */}
                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Payment Method</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-check-pay-img-inner">
                      <div className="cr-check-pay-img">
                        <img
                          src="assets/img/banner/payment.png"
                          alt="payment"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Sidebar Payment Block --> */}
              </div>
            </div>
            <div className="cr-checkout-leftside col-lg-8 col-md-12 m-t-991">
              {/* <!-- checkout content Start --> */}
              <div className="cr-checkout-content">
                <div className="cr-checkout-inner">
                  <div className="cr-checkout-wrap mb-30">
                    <div className="cr-checkout-block cr-check-new">
                      <h3 className="cr-checkout-title">New Customer</h3>
                      <div className="cr-check-block-content">
                        <div className="cr-check-subtitle">
                          Checkout Options
                        </div>
                        <form action="#">
                          <span className="cr-new-option">
                            <span>
                              <input
                                type="radio"
                                id="account1"
                                name="radio-group"
                                checked
                              />
                              <label>Register Account</label>
                            </span>
                            <span>
                              <input
                                type="radio"
                                id="account2"
                                name="radio-group"
                              />
                              <label>Guest Account</label>
                            </span>
                          </span>
                        </form>
                        <div className="cr-new-desc">
                          By creating an account you will be able to shop
                          faster, be up to date on an order's status, and keep
                          track of the orders you have previously made.
                        </div>
                        <span>
                          <button className="cr-button mt-30" type="submit">
                            Continue
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="cr-checkout-block cr-check-login">
                      <h3 className="cr-checkout-title">Returning Customer</h3>
                      <div className="cr-check-login-form">
                        <form action="#" method="post">
                          <span className="cr-check-login-wrap">
                            <label>Email Address</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your email address"
                              required
                            />
                          </span>
                          <span className="cr-check-login-wrap">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Enter your password"
                              required
                            />
                          </span>

                          <span className="cr-check-login-wrap cr-check-login-btn">
                            <button className="cr-button mr-15" type="submit">
                              Login
                            </button>
                            <a className="cr-check-login-fp" href="#">
                              Forgot Password?
                            </a>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="cr-checkout-wrap">
                    <div className="cr-checkout-block cr-check-bill">
                      <h3 className="cr-checkout-title">Billing Details</h3>
                      <div className="cr-bl-block-content">
                        <div className="cr-check-subtitle">
                          Checkout Options
                        </div>
                        <span className="cr-bill-option">
                          <span>
                            <input type="radio" id="bill1" name="radio-group" />
                            <label>I want to use an existing address</label>
                          </span>
                          <span>
                            <input
                              type="radio"
                              id="bill2"
                              name="radio-group"
                              checked
                            />
                            <label>I want to use new address</label>
                          </span>
                        </span>
                        <div className="cr-check-bill-form mb-minus-24">
                          <form action="#" method="post">
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>First Name*</label>
                              <input
                                type="text"
                                name="firstname"
                                placeholder="Enter your first name"
                                required
                              />
                            </span>
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>Last Name*</label>
                              <input
                                type="text"
                                name="lastname"
                                placeholder="Enter your last name"
                                required
                              />
                            </span>
                            <span className="cr-bill-wrap">
                              <label>Address</label>
                              <input
                                type="text"
                                name="address"
                                placeholder="Address Line 1"
                              />
                            </span>
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>City *</label>
                              <span className="cr-bl-select-inner">
                                <select
                                  name="cr_select_city"
                                  id="cr-select-city"
                                  className="cr-bill-select"
                                >
                                  <option selected disabled>
                                    City
                                  </option>
                                  <option value="1">City 1</option>
                                  <option value="2">City 2</option>
                                  <option value="3">City 3</option>
                                  <option value="4">City 4</option>
                                  <option value="5">City 5</option>
                                </select>
                              </span>
                            </span>
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>Post Code</label>
                              <input
                                type="text"
                                name="postalcode"
                                placeholder="Post Code"
                              />
                            </span>
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>Country *</label>
                              <span className="cr-bl-select-inner">
                                <select
                                  name="cr_select_country"
                                  id="cr-select-country"
                                  className="cr-bill-select"
                                >
                                  <option selected disabled>
                                    Country
                                  </option>
                                  <option value="1">Country 1</option>
                                  <option value="2">Country 2</option>
                                  <option value="3">Country 3</option>
                                  <option value="4">Country 4</option>
                                  <option value="5">Country 5</option>
                                </select>
                              </span>
                            </span>
                            <span className="cr-bill-wrap cr-bill-half">
                              <label>Region State</label>
                              <span className="cr-bl-select-inner">
                                <select
                                  name="cr_select_state"
                                  id="cr-select-state"
                                  className="cr-bill-select"
                                >
                                  <option selected disabled>
                                    Region/State
                                  </option>
                                  <option value="1">Region/State 1</option>
                                  <option value="2">Region/State 2</option>
                                  <option value="3">Region/State 3</option>
                                  <option value="4">Region/State 4</option>
                                  <option value="5">Region/State 5</option>
                                </select>
                              </span>
                            </span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="cr-check-order-btn">
                    <a className="cr-button mt-30" href="#">
                      Place Order
                    </a>
                  </span>
                </div>
              </div>
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1900s,
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
                        <button type="button" id="sub_model" className="minus">
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
                <a href="product-left-sidebar.html" className="crside_pro_img">
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
                <a href="product-left-sidebar.html" className="crside_pro_img">
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
                <a href="product-left-sidebar.html" className="crside_pro_img">
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
                  <img src="assets/img/shape/bg-shape-1.png" alt="bg-shape-1" />
                </li>
                <li className="bg-2">
                  <img src="assets/img/shape/bg-shape-2.png" alt="bg-shape-2" />
                </li>
                <li className="bg-3">
                  <img src="assets/img/shape/bg-shape-3.png" alt="bg-shape-3" />
                </li>
                <li className="bg-4">
                  <img src="assets/img/shape/bg-shape-4.png" alt="bg-shape-4" />
                </li>
                <li className="bg-5">
                  <img src="assets/img/shape/bg-shape-5.png" alt="bg-shape-5" />
                </li>
                <li className="bg-6 active-bg-panel">
                  <img src="assets/img/shape/bg-shape-6.png" alt="bg-shape-6" />
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
    </>
  );
};

export default CheckOut;
