import React from "react";

const DisplayClothData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((value) => {
        return (
          <>
            <h1>Product : {value.cloth}</h1>
            <button>Add To cart</button>
          </>
        );
      })}
    </div>
  );
};

export default DisplayClothData;
