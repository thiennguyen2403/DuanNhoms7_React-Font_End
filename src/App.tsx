import { Route, Routes } from "react-router-dom";
import "./App.css";

import AuthForm from "./pages/AuthForm";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <>
      <Header />
      <main id="main" className="container">
        <Routes>
          {/* Client */}
          <Route index element={<Home product={[]} />} />
          <Route path="/login" element={<AuthForm isLogin />} />
          <Route path="/register" element={<AuthForm />} />

          {/* Admin */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/product-add" element={<ProductForm />} />
          <Route path="/admin/product-edit/:id" element={<ProductForm />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
