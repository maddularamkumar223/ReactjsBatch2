import { useContext } from "react";
import { productContext } from "../comtext/ProductContext";
import DsipalyProducts from "./DsipalyProducts";

const Kids = () => {
  let products = useContext(productContext);
  let filterKidsData = products.filter((value) => value.category === "kids");
  return (
    <div>
      <DsipalyProducts filterProducts={filterKidsData} />
    </div>
  );
};

export default Kids;
