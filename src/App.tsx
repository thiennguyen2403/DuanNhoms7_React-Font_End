import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";

import ProductForm from "./components/ProductForm";
import AuthForm from "./pages/AuthForm";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopLeftSidebar from "./pages/categories/ShopLeftSidebar";
import ProductDetail from "./pages/Clients/products/ProductDetail";

import About from "./pages/Clients/page/About";
import Cart from "./pages/Clients/page/Cart";
import CheckOut from "./pages/Clients/page/CheckOut";
import Contact from "./pages/Clients/page/Contact";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="categories" element={<ShopLeftSidebar />} />
          <Route path="products" element={<ProductDetail />} />
          <Route path="page/about" element={<About />} />
          <Route path="page/cart" element={<Cart />} />
          <Route path="page/contact" element={<Contact />} />
          <Route path="page/checkout" element={<CheckOut />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path="/login" element={<AuthForm isLogin />} />
        <Route path="/register" element={<AuthForm />} />

        <Route path="/admin">
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/admin/product-add" element={<ProductForm />} />
        <Route path="/admin/product-edit/:id" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
