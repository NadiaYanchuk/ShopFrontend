import React from "react";
import { Home } from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
    </Routes>
  );
};
