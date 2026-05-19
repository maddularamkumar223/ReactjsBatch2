import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBack = () => {
  let [count, setCount] = useState(0);
  let demo = () => {
    console.log("I am a demo function without call back");
  };
  demo();

  let demo1 = useCallback(() => {
    console.log("I am a demo 1 function");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Child demo1={demo1} count={count} />
    </div>
  );
};

export default UseCallBack;
