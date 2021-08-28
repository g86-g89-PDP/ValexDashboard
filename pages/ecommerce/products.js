import React from "react";
import Products from "../../containers/Products/Products";
import Dashboard from "../../containers/Dashboard/Dashboard";

const products = () => {
  return (
    <Dashboard menu="/products">
      <Products />
    </Dashboard>
  );
};

export default products;
