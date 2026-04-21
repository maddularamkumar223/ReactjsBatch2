import React, { useState } from "react";

const ControlledForms = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  let handleUserChange = (e) => {
    console.log(e);
    setUserName(e.target.value);
  };
  let handlePasswordChange = (e) => {
    console.log(e);
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "" || password === "") {
      alert("Fill all the fields");
    } else {
      let personDetails = {
        userName: userName,
        password: password,
      };
      console.log(personDetails);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Username</label>
          <input type="text" value={userName} onChange={handleUserChange} />
        </aside>
        <aside>
          <label htmlFor="">Password</label>
          <input type="text" value={password} onChange={handlePasswordChange} />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default ControlledForms;
