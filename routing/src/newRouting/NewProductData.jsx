import React from "react";
import { Link, Outlet } from "react-router-dom";

const NewProductData = () => {
  return (
    <div>
      <Link to="/newProducts">Men</Link>
      <Link to="/newProducts/women">Women</Link>
      <Link to="/newProducts/kids">Kids</Link>

      <Outlet />
    </div>
  );
};

export default NewProductData;
