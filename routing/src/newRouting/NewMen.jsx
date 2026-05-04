import { Link } from "react-router-dom";

const NewMen = () => {
  return (
    <div>
      <p>T shirt</p>
      <p>Price :200</p>
      <Link to={`/newSingleProduct/${1}`}>View More</Link>
    </div>
  );
};

export default NewMen;
