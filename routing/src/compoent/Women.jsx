import { useContext } from "react";
import { productContext } from "../comtext/ProductContext";
import DsipalyProducts from "./DsipalyProducts";

const Women = () => {
  let products = useContext(productContext);
  let filterWomenData = products.filter((value) => value.category === "women");
  return (
    <div>
      <DsipalyProducts filterProducts={filterWomenData} />
    </div>
  );
};

export default Women;
