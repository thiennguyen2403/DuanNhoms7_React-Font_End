import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { Category } from "../interfaces/Category";
import instance from "../api";

const Header = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/categories`);
        setCategories(data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    })();
  }, []);

  const handleAdminAccess = () => {
    if (user && user.role === "admin") {
      navigate("/admin");
    } else {
      alert("You do not have permission to access the admin page.");
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoryId = event.target.value;
    if (categoryId) {
      navigate(`/category/${categoryId}`);
    }
  };

  return (
    <>
      <header className="header-menu-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-header">
                <a href="" className="cr-logo">
                  <img
                    src="./src/css/assets/img/logo/logo.png"
                    alt="logo"
                    className="logo"
                  />
                  <img
                    src="assets/img/logo/dark-logo.png"
                    alt="logo"
                    className="dark-logo"
                  />
                </a>

                <form className="cr-search">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search For items..."
                  />
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                  <a href="javascript:void(0)" className="search-btn">
                    <i className="ri-search-line"></i>
                  </a>
                </form>
                <div className="cr-right-bar">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle cr-right-bar-item"
                        href="javascript:void(0)"
                      >
                        <i className="ri-user-3-line"></i>
                        <span>{user ? "Xin chào!" : "Account"}</span>
                      </a>
                      <ul className="dropdown-menu">
                        {user ? (
                          <>
                            <li>
                              <a className="dropdown-item" href="#">
                                {user.email}
                              </a>
                            </li>
                            {user.role === "admin" && (
                              <li>
                                <a
                                  className="dropdown-item"
                                  onClick={handleAdminAccess}
                                >
                                  Admin
                                </a>
                              </li>
                            )}
                            <li>
                              <Link className="dropdown-item" to="/historyCart">
                                Order History
                              </Link>
                            </li>
                            <li>
                              <a className="dropdown-item" onClick={logout}>
                                Logout
                              </a>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link className="dropdown-item" to={"/register"}>
                                Register
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to={"/checkout"}>
                                Checkout
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to={"/login"}>
                                Login
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                  <Link
                    to="/cart"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="container">
            <div className="cr-menu-list">
              <nav className="navbar navbar-expand-lg">
                <a
                  href="javascript:void(0)"
                  className="navbar-toggler shadow-none"
                >
                  <i className="ri-menu-3-line"></i>
                </a>
                <div className="cr-header-buttons">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="javascript:void(0)">
                        <i className="ri-user-3-line"></i>
                      </a>
                      <ul className="dropdown-menu">
                        {user ? (
                          <>
                            <li>
                              <a className="dropdown-item" href="#">
                                {user.email}
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" onClick={logout}>
                                Logout
                              </a>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <a className="dropdown-item" href="register.html">
                                Register
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="checkout.html">
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="login.html">
                                Login
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                  <a href="wishlist.html" className="cr-right-bar-item">
                    <i className="ri-heart-line"></i>
                  </a>
                  <Link
                    to="/cart"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line"></i>
                  </Link>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav menuheader mx-auto text-center">
                    <li className="nav-item">
                      <Link className="nav-link text-dark fs-5" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-dark fs-5"
                        href="javascript:void(0)"
                        data-bs-toggle="dropdown"
                      >
                        Category
                      </a>
                      <ul className="dropdown-menu">
                        {categories.map((item) => (
                          <li key={item._id}>
                            <Link
                              className="dropdown-item text-dark"
                              to={`/category/${item._id}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-dark fs-5"
                        href="javascript:void(0)"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/about"}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/contact"}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/cart"}
                          >
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/checkout"}
                          >
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/login"}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-dark"
                            to={"page/register"}
                          >
                            Register
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link text-dark fs-5" to={"blog"}>
                        Blog
                      </Link>
                    </li>
                    {user && (
                      <li className="nav-item">
                        <Link
                          className="nav-link text-dark fs-5"
                          to="/historyCart"
                        >
                          Order History
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
              <div className="cr-calling">
                <i className="ri-phone-line"></i>
                <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
