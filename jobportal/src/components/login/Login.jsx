import { useContext, useState } from "react";
import Form from "../form/Form";
import { authContext } from "../../utilities";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  let homeNavigate = () => {
    navigate("/");
  };
  let { validation } = useContext(authContext);
  let { email, password } = loginDetails;

  let handleChange = (e) => {
    let { value, name } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    validation(loginDetails);
    setLoginDetails({
      email: "",
      password: "",
    });
    homeNavigate();
  };

  let loginData = [
    {
      name: "email",
      state: email,
      type: "email",
    },
    {
      name: "password",
      state: password,
      type: "password",
    },
  ];
  return (
    <div>
      <Form
        data={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
