import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../utilities";

const Profile = () => {
  let { userId, removeId } = useContext(authContext);
  console.log(userId);
  return (
    <ul>
      {userId === null && (
        <>
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
          <li>
            {" "}
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
      {userId !== null && (
        <li>
          <button onClick={removeId}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default Profile;
