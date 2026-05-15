import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  let dataValue = useSelector((state) => state);
  console.log(dataValue.cart.productCart);
  let navCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "10vh",
    borderBottom: "1px solid gray",
  };

  let p = {
    fontSize: "20px",
    marginRight: "10px",
  };
  return (
    <nav style={navCss}>
      <div>
        <Link to="/counter" style={p}>
          Counter
        </Link>
        <Link to="/products" style={p}>
          Products
        </Link>
      </div>
      <div>
        <Link to="/cartDisplay" style={p}>
          Cart Value : {dataValue.cart.productCart.length}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
