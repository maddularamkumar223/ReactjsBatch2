import { useContext } from "react";
import { messageContext } from "../context/messageContext";

const Child3 = ({ name }) => {
  let data = useContext(messageContext);
  console.log(data);
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Child3;
