import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../utilities";

const Navigation = () => {
  let { singleUserData } = useContext(authContext);
  return (
    <div>
      {singleUserData.role === "hiring" && (
        <Link to="/jobPosting">Post A Job</Link>
      )}
    </div>
  );
};

export default Navigation;
