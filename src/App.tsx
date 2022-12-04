import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddProduct from "./components/admin/AddProduct";
import ListProducts from "./components/admin/ListProducts";
import EditProduct from "./components/admin/EditProduct";
import UserLayout from "./layouts/UserLayout";
import Home from "./components/website/Home";
import Products from "./components/website/Products";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import DetailProduct from "./components/website/DetailProduct";
import PrivateLayout from "./layouts/PrivateLayout";
import Cart from "./components/website/cartPage/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateLayout>
              <AdminLayout />
            </PrivateLayout>
          }
        >
          <Route index element={<ListProducts />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
        </Route>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id/detail" element={<DetailProduct />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
