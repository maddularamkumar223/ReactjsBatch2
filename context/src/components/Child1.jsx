import { useContext } from "react";
import { messageContext } from "../context/messageContext";

const Child1 = () => {
  let data = useContext(messageContext);
  return (
    <div>
      child1
      <p>{data} child 1</p>
    </div>
  );
};

export default Child1;
