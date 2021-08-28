import Dashboard from "../../containers/Dashboard";
import ProductDetailes from "../../containers/Ecomerce/productDetailes";
import React from "react";

const ProductDetailis = () => {
  return (
    <Dashboard menu="/productDetails">
      <ProductDetailes />
    </Dashboard>
  );
};

export default ProductDetailis;
