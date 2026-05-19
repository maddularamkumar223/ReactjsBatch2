import { useSelector } from "react-redux";

const DisplayingData = () => {
  let data = useSelector((state) => state.curd);
  console.log(data);
  return <div>DisplayingData</div>;
};

export default DisplayingData;
