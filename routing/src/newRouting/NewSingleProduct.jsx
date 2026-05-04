import React from "react";
import { useParams } from "react-router-dom";

const NewSingleProduct = () => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default NewSingleProduct;
