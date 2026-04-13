import React from "react";

const DataDisplayContainer = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <>
            <p>Product: {product.name}</p>
            <p>Price: {product.cost}</p>
            <button>Add To cart</button>
          </>
        );
      })}
    </div>
  );
};

export default DataDisplayContainer;
