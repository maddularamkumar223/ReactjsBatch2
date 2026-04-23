import React, { useState } from "react";

const Checkbox = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    skills: [],
  });

  let [checked, setChecked] = useState({
    html: false,
    css: false,
    js: false,
  });

  let { html, css, js } = checked;
  //   let [checked, setChecked] = useState(false);
  let { name, email, password, skills } = details;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleCheckBox = (e) => {
    let { value } = e.target;
    if (skills.includes(value)) {
      setDetails({
        ...details,
        skills: skills.filter((skill) => skill != value),
      });
    } else {
      setDetails({ ...details, skills: [...skills, value] });
    }
  };
  //   let handleCheckboxValue = () => {
  //     setChecked(!checked);
  //   };
  let handleCheckboxValue = (data, dataName) => {
    setChecked({ ...checked, [dataName]: !data });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails({
      name: "",
      email: "",
      password: "",
      skills: [],
    });
    setChecked({
      html: false,
      css: false,
      js: false,
    });
  };
  console.log(details);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </aside>
        <aside>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </aside>
        <aside value={skills} onChange={handleCheckBox}>
          <label htmlFor="">Skills</label>
          <input
            type="checkbox"
            value="html"
            name="html"
            checked={html}
            onClick={() => {
              handleCheckboxValue(html, "html");
            }}
          />
          HTML
          <input
            type="checkbox"
            value="css"
            name="css"
            checked={css}
            onClick={() => {
              handleCheckboxValue(css, "css");
            }}
          />
          CSS
          <input
            type="checkbox"
            value="js"
            name="js"
            checked={js}
            onClick={() => {
              handleCheckboxValue(js, "js");
            }}
          />
          JS
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Checkbox;
