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

  let updatePrices = (minValue, maxValue) => {
    setCostValue({ min: minValue, max: maxValue });
  };
  console.log(costValue);
  return (
    <div>
      <Buttons updatePrices={updatePrices} />
      <DataDisplayContainer products={products} />
    </div>
  );
};

export default Parent;
