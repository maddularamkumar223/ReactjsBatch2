import React from "react";

const Counter = ({ count, add, sub }) => {
  console.log(count);
  console.log(add);
  console.log(sub);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  );
};

export default Counter;
