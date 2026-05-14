import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "../reduxToolkit/slice/counterSlice";

const Counter = () => {
  let [count, setCount] = useState(0);

  let data = useSelector((state) => state.counter);
  console.log(data);
  let dispatch = useDispatch();
  return (
    // <div>
    //   <p>Count : {count}</p>
    //   <button onClick={() => setCount(count + 1)}>Add</button>
    //   <button onClick={() => setCount(count - 1)}>Sub</button>
    // </div>
    <div>
      <p>Count : {data}</p>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={()=> dispatch(sub())}>Sub</button>
    </div>
  );
};

export default Counter;
