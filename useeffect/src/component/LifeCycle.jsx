import { useEffect, useState } from "react";

const LifeCycle = () => {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState(true);
  function demo() {
    console.log("I am a demo function");
  }
  useEffect(() => {
    console.log("I am a useEffect");
    demo();
    return () => {
      console.log("I am a unmounting function");
    };
  }, [value]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setValue(!value)}>Click me</button>
    </div>
  );
};

export default LifeCycle;
