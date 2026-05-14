import { useContext, useState } from "react";
import Form from "./../form/Form";
import { jobContext } from "../../utilities";
import { useNavigate } from "react-router-dom";

const JobPosting = () => {
  let [postDetails, setPostDetails] = useState({
    companyName: "",
    jobRole: "",
    salary: "",
    skills: "",
    experience: "",
  });
  let navigate = useNavigate();

  let navigateData = () => {
    navigate("/");
  };

  let { addJob } = useContext(jobContext);

  let { companyName, jobRole, salary, skills, experience } = postDetails;
  let postData = [
    {
      name: "companyName",
      state: companyName,
      type: "text",
    },
    {
      name: "jobRole",
      state: jobRole,
      type: "text",
    },
    {
      name: "salary",
      state: salary,
      type: "text",
    },
    {
      name: "experience",
      state: experience,
      type: "text",
    },
    {
      name: "skills",
      state: skills,
      type: "text",
    },
  ];

  let handleChange = (e) => {
    let { value, name } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    addJob(postDetails);
    navigateData();
  };
  return (
    <div>
      <Form
        data={postData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default JobPosting;
