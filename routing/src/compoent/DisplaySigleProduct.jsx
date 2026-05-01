import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../comtext/ProductContext";

const DisplaySigleProduct = () => {
  let { id } = useParams();
  console.log(id);
  let products = useContext(productContext);
  console.log(products);
  let findSingleProduct = products.find((value) => value.id === Number(id));
  console.log(findSingleProduct);
  return (
    <div>
      <p>Product Name: {findSingleProduct.productName}</p>
      <p>Product Price: {findSingleProduct.price}</p>
      <p>Product Category: {findSingleProduct.category}</p>
      <button>Add To cart</button>
    </div>
  );
};

export default DisplaySigleProduct;
