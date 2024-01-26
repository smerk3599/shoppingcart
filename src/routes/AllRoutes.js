import { Routes, Route } from "react-router-dom";
import { ProductList, CartList, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="cart" element={<CartList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
