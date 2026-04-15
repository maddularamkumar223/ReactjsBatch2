import React, { useState } from "react";
import Buttons from "./Buttons";
import DataDisplayContainer from "./DataDisplayContainer";

const Parent = () => {
  let products = [
    {
      id: 1,
      name: "pen",
      cost: 20,
    },
    {
      id: 2,
      name: "shirt",
      cost: 550,
    },
    {
      id: 3,
      name: "t-shirt",
      cost: 200,
    },
    {
      id: 4,
      name: "watch",
      cost: 1500,
    },
    {
      id: 5,
      name: "chair",
      cost: 750,
    },
    {
      id: 6,
      name: "shoes",
      cost: 1800,
    },
  ];
  let [costValue, setCostValue] = useState({
    min: 0,
    max: 0,
  });
  let [cartValue, setCartValue] = useState(0);
  // ! Update min and max values
  let updatePrices = (minValue, maxValue) => {
    setCostValue({ min: minValue, max: maxValue });
  };
  // ! Update CartValue
  let updateCartValue = () => {
    setCartValue(cartValue + 1);
  };
  // ! For Filter the products
  let filterData = () => {
    let data = products.filter(
      (product) =>
        product.cost >= costValue.min && product.cost <= costValue.max,
    );
    return data;
  };
  return (
    <div>
      <Buttons updatePrices={updatePrices} />
      {costValue.min === 0 && costValue.max === 0 ? (
        <DataDisplayContainer
          products={products}
          cartValue={cartValue}
          updateCartValue={updateCartValue}
        />
      ) : (
        <DataDisplayContainer
          products={filterData()}
          cartValue={cartValue}
          updateCartValue={updateCartValue}
        />
      )}
    </div>
  );
};

export default Parent;
