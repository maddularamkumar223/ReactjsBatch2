import React, { useRef } from "react";

const UncontrolledForm = () => {
  let userNameRef = useRef();
  let passwordRef = useRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (userNameRef.current.value === "" || passwordRef.current.value === "") {
      alert("Fill all the fields");
    } else {
      let personDetails = {
        name: userNameRef.current.value,
        password: passwordRef.current.value,
      };
      handleValidation(personDetails);
    }
  };

  let handleValidation = (data) => {
    if (data.name === "ram@gmail.com" && data.password === "123456") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            placeholder="Enter the UserName"
            ref={userNameRef}
          />
        </aside>
        <aside>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            ref={passwordRef}
          />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default UncontrolledForm;
