import { useContext } from "react";
import { productContext } from "./../comtext/ProductContext";
import DsipalyProducts from "./DsipalyProducts";

const Men = () => {
  let products = useContext(productContext);

  let filterMenProducts = products.filter(
    (product) => product.category === "men",
  );
  console.log(filterMenProducts);
  console.log(products);
  return <DsipalyProducts filterProducts={filterMenProducts} />;
};

export default Men;
