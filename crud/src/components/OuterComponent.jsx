import { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import Fom from "./Fom";

const OuterComponent = () => {
  let [details, setDetails] = useState([]);

  let updateDetails = (data) => {
    setDetails([...details, data]);
  };
  console.log(details);
  return (
    <section>
      <article>
        <Fom updateDetails={updateDetails} />
      </article>
      <article>
        <DisplayContainer details={details} />
      </article>
    </section>
  );
};

export default OuterComponent;
