import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../apicalls/ProductApi";

const Products = () => {
  let data = useSelector((state) => state.product);

  let { products, loading, error } = data;
  console.log(loading);
  console.log(error);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {products?.map((product) => {
            return (
              <article key={product.id}>
                <p>Product Name: {product.title}</p>
                <p>Product Price: {product.price}</p>
                <button>Add To Cart</button>
              </article>
            );
          })}
        </>
      )}

      {error !== "" && <h1>{error}</h1>}
    </div>
  );
};

export default Products;
