import { Link } from "react-router-dom";

const NavbarNew = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/newProducts">Products</Link>
    </div>
  );
};

export default NavbarNew;
