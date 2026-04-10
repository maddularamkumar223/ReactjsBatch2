import React, { useState } from "react";
import Counter from "./Counter";

const CounterParent = () => {
  let [count, setCount] = useState(0);

  let add = () => {
    setCount(count + 1);
  };
  let sub = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Counter count={count} add={add} sub={sub} />
    </div>
  );
};

export default CounterParent;
