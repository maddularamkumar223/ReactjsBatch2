import React from "react";

const DataDisplayContainer = ({ products, cartValue, updateCartValue }) => {
  return (
    <div>
      <p>
        Cart <sup>{cartValue}</sup>
      </p>
      {products.map((product) => {
        return (
          <>
            <p>Product: {product.name}</p>
            <p>Price: {product.cost}</p>
            <button onClick={updateCartValue}>Add To cart</button>
          </>
        );
      })}
    </div>
  );
};

export default DataDisplayContainer;
