import { useDispatch } from "react-redux";
import data from "./../../data";
import Style from "./Product.module.css";
import { addToCart } from "../../reduxToolkit/slice/cartSlice";
const Products = () => {
  let dispatch = useDispatch();
  return (
    <section id={Style.outerContainer}>
      {data.map((product) => {
        return (
          <article key={product.id}>
            <img src={product.image} alt="" />
            <p>Product Name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add To Cart
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
