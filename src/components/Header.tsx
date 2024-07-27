import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { Category } from "../interfaces/Category";
import instance from "../api";

const Header = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const [categories, setCategories] = useState<Category[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/categories`);
      setCategories(data.data);
    })();
  }, []);

  const handleAdminAccess = () => {
    if (user && user.role === "admin") {
      nav("/admin");
    } else {
      alert("You do not have permission to access the admin page.");
    }
  };

  return (
    <>
      <header>
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
                  >
                    <option selected>All Categories</option>
                    <option value="1">Mens</option>
                    <option value="2">Womens</option>
                    <option value="3">Electronics</option>
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
                              <Link
                                className="dropdown-item"
                                to={"page/checkout"}
                              >
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
                  <a href="wishlist.html" className="cr-right-bar-item">
                    <i className="ri-heart-3-line"></i>
                    <span>Wishlist</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="container">
            <div className="cr-menu-list">
              {/* Categories menu here */}
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
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line"></i>
                  </a>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={"categories"}
                      >
                        Category
                      </Link>
                      <ul className="dropdown-menu">
                        {categories.map((item) => (
                          <li key={item._id}>
                            <Link className="dropdown-item" to={""}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={"products"}
                      >
                        Product
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="javascript:void(0)"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={"page/about"}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"page/contact"}>
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"page/cart"}>
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"page/checkout"}>
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"page/login"}>
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"page/register"}>
                            Register
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to={"blog"}>
                        Blog
                      </Link>
                    </li>
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
