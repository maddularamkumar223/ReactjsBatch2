// ! Single Check box

// import React, { useState } from "react";

// const RevisionCheckbox = () => {
//   let [singleCheck, setSingleCHeck] = useState(false);

//   let handleSingleCheckBox = () => {
//     setSingleCHeck(!singleCheck);
//   };
//   console.log(singleCheck);
//   return (
//     <div>
//       <form action="">
//         <input
//           type="checkbox"
//           checked={singleCheck}
//           onChange={handleSingleCheckBox}
//         />{" "}
//         I accept the agreement
//       </form>
//     </div>
//   );
// };

// export default RevisionCheckbox;

// ! Multiple Check box
import React, { useState } from "react";

const RevisionCheckbox = () => {
  // let [checked, setChecked] = useState(false);
  // let handleCheckbox = () => {
  //   setChecked(!checked);
  // };
  // console.log(checked)

  let [checked, setChecked] = useState({
    html: false,
    css: false,
    js: false,
  });

  let [skills, setSkills] = useState([]);

  let { html, css, js } = checked;

  let handleMultipleCheckBox = (data, value, e) => {
    setChecked({ ...checked, [data]: !value });
  };

  let addDataToState = (e) => {
    let { value } = e.target;
    if (skills.includes(value)) {
      setSkills(skills.filter((skill) => skill != value));
    } else {
      setSkills([...skills, value]);
    }
  };
  // console.log(checked); 
  return (
    <div>
      <label htmlFor="">Skills</label>
      <input
        type="checkbox"
        checked={html}
        onChange={() => {
          handleMultipleCheckBox("html", html);
        }}
        onClick={addDataToState}
        value="html"
      />
      HTML
      <input
        type="checkbox"
        checked={css}
        onChange={() => {
          handleMultipleCheckBox("css", css);
        }}
        value="css"
        onClick={addDataToState}
      />
      CSS
      <input
        type="checkbox"
        checked={js}
        onChange={() => {
          handleMultipleCheckBox("js", js);
        }}
        value="js"
        onClick={addDataToState}
      />
      JS
    </div>
  );
};

export default RevisionCheckbox;
