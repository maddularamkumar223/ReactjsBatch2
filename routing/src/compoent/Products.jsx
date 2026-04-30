import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link to="/products">Men</Link>
      <Link to="/products/women">Women</Link>
      <Link to="/products/kids">Kids</Link>
      <article>
        <Outlet />
      </article>
    </div>
  );
};

export default Products;
