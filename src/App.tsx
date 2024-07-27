import { Route, Routes, useLocation } from "react-router-dom";
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
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
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
          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/login" element={<AuthForm isLogin />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/admin">
          <Route path="" element={<Dashboard />} />
          <Route path="product-add" element={<ProductForm />} />
          <Route path="product-edit/:id" element={<ProductForm />} />
          <Route path="category-add" element={<CategoryForm />} />
          <Route path="category-edit/:id" element={<CategoryForm />} />
          <Route path="category" element={<CategoryList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
