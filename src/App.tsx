import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";
import { Product } from "./interfaces/Product";
import { useEffect, useState } from "react";
import { instance } from "./api";
import ProductForm from "./components/ProductForm";
import AuthForm from "./pages/AuthForm";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopLeftSidebar from "./pages/categories/ShopLeftSidebar";
import ProductDetail from "./pages/Clients/products/ProductDetail";
import Login from "./pages/Clients/page/Login";
import Register from "./pages/Clients/page/Register";
import About from "./pages/Clients/page/About";
import Cart from "./pages/Clients/page/Cart";
import CheckOut from "./pages/Clients/page/CheckOut";
import Contact from "./pages/Clients/page/Contact";
import Blog from "./pages/blog/Blog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const nav = useNavigate();
  const fetchProducts = async () => {
    const { data } = await instance.get(`/products`);
    setProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRemove = async (id: any) => {
    if (confirm("Are you sure?")) {
      await instance.delete(`/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const onSubmitProduct = async (data: Product) => {
    if (data.id) {
      await instance.patch(`/products/${data.id}`, data);
      fetchProducts();
    } else {
      const res = await instance.post(`/products`, data);
      setProducts([...products, res.data]);
    }
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
        <Route path="" element={<Home product={products}/>}/>
        <Route path="categories" element={<ShopLeftSidebar />} />
        <Route path="products" element={<ProductDetail />} />
        <Route path="page/login" element={<Login />} />
        <Route path="page/register" element={<Register />} />
        <Route path="page/about" element={<About />} />
        <Route path="page/cart" element={<Cart />} />
        <Route path="page/contact" element={<Contact />} />
        <Route path="page/checkout" element={<CheckOut />} />
        <Route path="blog" element={<Blog/>} />
        <Route path="*" element={<Notfound />} />
        </Route>
        <Route path="/login" element={<AuthForm isLogin />} />
        <Route path="/register" element={<AuthForm />} />

        <Route
          path="/admin"
          element={<Dashboard products={products} onRemove={handleRemove} />}
        />
        <Route
          path="/admin/product-add"
          element={<ProductForm onSubmit={onSubmitProduct} />}
        />
        <Route
          path="/admin/product-edit/:id"
          element={<ProductForm onSubmit={onSubmitProduct} />}
        />
        
      </Routes>
    </>
  );
}

export default App;
