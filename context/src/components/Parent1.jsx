import Child1 from "./Child1";
import Child3 from "./Child3";

const Parent1 = ({ name }) => {
  return (
    <div>
      <Child1 />
      <Child3 name={name} />
    </div>
  );
};

export default Parent1;
