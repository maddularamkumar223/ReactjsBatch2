import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/homepage">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navbar;
