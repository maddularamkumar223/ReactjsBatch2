import { useEffect, useMemo, useState } from "react";

const JobFiltering = () => {
  let [jobs, setJobs] = useState(null);
  let [salary, setSalary] = useState("");
  let [theme, setTheme] = useState(false);

  let fetchJobs = async () => {
    try {
      let response = await fetch("../../MOCK_DATA (1).json");
      let jobsData = await response.json();
      setJobs(jobsData);
    } catch {
      alert("Data Not fetched");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  let filterSalary = useMemo(() => {
    console.log("Filtering Jobs ....");
    return jobs?.filter((value) => value.salary === salary);
  }, [salary]);

  return (
    <div>
      <button onClick={() => setSalary(50)}>50</button>
      <button onClick={() => setSalary(80)}>80</button>
      <button onClick={() => setSalary(100)}>100</button>
      <p>{theme ? "Theme Changes" : "Theme Not Changes"}</p>
      <button onClick={() => setTheme(!theme)}>Set Theme</button>

      {filterSalary?.map((job) => {
        return (
          <article>
            <p>Company Name:{job.companyName}</p>
            <p>Job Role{job.jobRole}</p>
            <p>Salary :{job.salary}</p>
            <button>Apply</button>
          </article>
        );
      })}
    </div>
  );
};

export default JobFiltering;
