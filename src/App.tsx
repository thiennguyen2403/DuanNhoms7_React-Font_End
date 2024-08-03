import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";
import ProductForm from "./components/ProductForm";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopLeftSidebar from "./pages/categories/ShopLeftSidebar";
import ProductDetail from "./components/ProductDetail";
import About from "./pages/Clients/page/About";
import CheckOut from "./pages/Clients/page/CheckOut";
import Contact from "./pages/Clients/page/Contact";
import Blog from "./pages/blog/Blog";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";
import CartPage from "./pages/Clients/page/CartPage";
import AdminHeader from "./pages/admin/AdminHeader";
import UsesList from "./components/UsesList";
import CheckoutPage from "./pages/Clients/page/CheckOut";
import OrderDetailsPage from "./pages/Clients/page/OrderDetailsPage";
import OrderHistoryPage from "./pages/Clients/page/OrderHistoryPage";
import CartList from "./components/CartList";
import CategoryPage from "./components/CategoryPage";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<ShopLeftSidebar />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/page/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/page/contact" element={<Contact />} />
        <Route path="/page/checkout" element={<CheckOut />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
        <Route path="/historyCart" element={<OrderHistoryPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<Notfound />} />

        <Route path="/login" element={<AuthForm isLogin />} />
        <Route path="/register" element={<AuthForm />} />

        <Route path="/admin">
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<UsesList />} />
          <Route path="product-add" element={<ProductForm />} />
          <Route path="product-edit/:id" element={<ProductForm />} />
          <Route path="category-add" element={<CategoryForm />} />
          <Route path="category-edit/:id" element={<CategoryForm />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="cartList" element={<CartList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
