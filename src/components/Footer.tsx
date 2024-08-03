import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer padding-t-100 bg-off-white">
        <div className="container">
          <div className="row footer-top padding-b-100">
            <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
              <div className="cr-footer-logo">
                <div className="image">
                  <img
                    src="/src/css/assets/img/logo/logo.png"
                    alt="logo"
                    className="logo"
                  />
                  <img
                    src="/src/css/assets/img/logo/dark-logo.png"
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
                    <div className="swiper-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-last-footer">
            <p>
              &copy; <span id="copyright_year"></span>
              <a href="index.html">Carrot</a>, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
