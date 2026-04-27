import Child2 from "./Child2";
import Child4 from "./Child4";

const Parent2 = ({name}) => {
  return (
    <div>
      <Child2 />
      <Child4 name={name} />
    </div>
  );
};

export default Parent2;
