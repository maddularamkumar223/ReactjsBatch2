import React, { useState } from "react";

let Function = () => {
  console.log(React.useState());
  let [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
    </>
  );
};
export default Function;
