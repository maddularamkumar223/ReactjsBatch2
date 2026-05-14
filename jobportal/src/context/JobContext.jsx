import { useState } from "react";
import { baseUrl, jobContext } from "../utilities";
let JobProvider = ({ children }) => {
  let [companyPosts, setCompanyPosts] = useState(null);
  let getJobs = async () => {
    try {
      let response = await fetch(`${baseUrl}/jobs`);
      let jobs = await response.json();
      setCompanyPosts(jobs);
    } catch {
      alert("Try After Some Time");
    }
  };

  let addJob = async (data) => {
    try {
      await fetch(`${baseUrl}/jobs`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Job Posted Done");
    } catch {
      alert("Try After Some Time");
    }
  };
  return (
    <jobContext.Provider value={{ addJob, getJobs, companyPosts }}>
      {children}
    </jobContext.Provider>
  );
};
export default JobProvider;
