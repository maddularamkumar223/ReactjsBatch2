import { useContext, useState } from "react";
import Form from "../form/Form";
import { authContext } from "../../utilities";

const Register = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    contact: "",
    role: "",
  });
  let { name, email, contact, password, confirmPassword, dob, gender, role } =
    details;

  let { addUser, loading } = useContext(authContext);
  console.log(addUser);
  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      (name === "",
      email === "",
      password === "",
      confirmPassword === "",
      gender === "",
      contact === "",
      dob === "",
      role === "")
    ) {
      alert("Fill All The Fields");
    } else if (password === confirmPassword) {
      console.log(details);
      addUser(details);
      if (loading === true) {
        alert("Register Successful");
      }
    } else {
      alert("Password Mismatch");
    }
  };
  let data = [
    {
      name: "name",
      type: "text",
      state: name,
    },
    {
      name: "email",
      type: "email",
      state: email,
    },
    {
      name: "password",
      type: "password",
      state: password,
    },
    {
      name: "confirmPassword",
      type: "password",
      state: confirmPassword,
    },
    {
      name: "contact",
      type: "tel",
      state: contact,
    },
    {
      name: "dob",
      type: "date",
      state: dob,
    },
    {
      name: "role",
      state: role,
      valueData: ["hiring", "job seeker"],
    },
    {
      name: "gender",
      state: gender,
      valueData: ["male", "female", "others"],
    },
  ];
  return (
    <>
      <Form
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
