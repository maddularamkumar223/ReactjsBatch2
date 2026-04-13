import React from "react";

const Buttons = ({ updatePrices }) => {
  return (
    <div>
      <button onClick={() => updatePrices(0, 500)}>Less Than 500</button>
      <button onClick={() => updatePrices(500, 1000)}>500-1000</button>
      <button onClick={() => updatePrices(1000, 2000)}>1000-2000</button>
    </div>
  );
};

export default Buttons;
