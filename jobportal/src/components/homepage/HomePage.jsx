import { useContext, useEffect } from "react";
import { jobContext } from "../../utilities";

const HomePage = () => {
  let { getJobs, companyPosts } = useContext(jobContext);
  console.log(companyPosts);
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <section>
      {companyPosts?.map((post) => {
        return (
          <article>
            <p>Company Name: {post.companyName}</p>
            <p>Job Role: {post.jobRole}</p>
            <p>Skills: {post.skills}</p>
            <p>Experience: {post.experience}</p>
            <p>Salary: {post.salary}</p>
          </article>
        );
      })}
    </section>
  );
};

export default HomePage;
