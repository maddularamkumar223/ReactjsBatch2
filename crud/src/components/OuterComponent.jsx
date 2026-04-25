import { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import Fom from "./Fom";

const OuterComponent = () => {
  let [details, setDetails] = useState([]);

  let updateDetails = (data) => {
    setDetails([...details, data]);
  };

  let deleteData = (id) => {
    setDetails(details.filter((product) => product.id !== id));
  };

  let getSingleProduct = (id) => {
    let singleProduct = details.find((product) => product.id === id);
    setProductDetails({ id: crypto.randomUUID(), ...singleProduct });
    setDetails(details.filter((product) => product.id !== id));
  };
  let [productDetails, setProductDetails] = useState({
    id: crypto.randomUUID(),
    productName: "",
    price: "",
    quantity: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
    updateDetails(productDetails);
    setProductDetails({
      id: crypto.randomUUID(),
      productName: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <section>
      <article>
        <Fom
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          productDetails={productDetails}
        />
      </article>
      <article>
        <DisplayContainer
          details={details}
          deleteData={deleteData}
          singleProduct={getSingleProduct}
        />
      </article>
    </section>
  );
};

export default OuterComponent;
