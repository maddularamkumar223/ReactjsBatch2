import { useState } from "react";
import { authContext } from "../../utilities";
import { baseUrl } from "../../utilities";
let AuthProvider = ({ children }) => {
  let [userDetails, setUserDetails] = useState({
    singleUserData: "",
    loading: false,
  });
  let { loading, singleUserData } = userDetails;
  let addUser = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        setUserDetails({ ...userDetails, loading: true });
      }
    } catch {
      alert("Something Went Wrong Try After Some Time ");
    }
  };

  let validation = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`);
      let responseData = await response.json();

      let singleUser = responseData.find(
        (value) =>
          value.email === data.email && value.password === data.password,
      );

      if (singleUser === undefined) {
        alert("User Not Found");
      } else {
        alert("Login Successful");
        setUserDetails({
          ...userDetails,
          singleUserData: singleUser,
          loading: true,
        });
        // localStorage.setItem("id",singleUser.id)
        sessionStorage.setItem("id", singleUser.id);
      }
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
  let userId = sessionStorage.getItem("id");
  let removeId = () => {
    sessionStorage.removeItem("id");
    setUserDetails({
      singleUserData: "",
      loading: false,
    });
  };
  console.log(singleUserData);
  return (
    <authContext.Provider
      value={{ addUser, loading, validation, singleUserData, userId, removeId }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
