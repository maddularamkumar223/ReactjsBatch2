import { useDispatch, useSelector } from "react-redux";
import Style from "./Product.module.css";
import { removeCart } from "../../reduxToolkit/slice/cartSlice";

const CartDispaly = () => {
  let data = useSelector((state) => state.cart.productCart);
  let dispatch = useDispatch();
  console.log(data);

  let totalPrice = data.reduce((total, product) => (total += product.price), 0);
  console.log(totalPrice);
  return (
    <div id={Style.outerContainer}>
      {data.map((product) => {
        return (
          <article key={product.id}>
            <img src={product.image} alt="" />
            <p>Product Name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Rating : {product.rating.rate}</p>
            <button onClick={() => dispatch(removeCart(product.id))}>
              Remove
            </button>
          </article>
        );
      })}
      <h1>Total Price :{totalPrice} </h1>
    </div>
  );
};

export default CartDispaly;
