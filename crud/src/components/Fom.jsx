import { useState } from "react";

const Fom = ({ updateDetails }) => {
  let [productDetails, setProductDetails] = useState({
    productName: "",
    price: "",
    quantity: "",
  });
  let { productName, price, quantity } = productDetails;

  let handleChange = (e) => {
    let { value, name } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
    updateDetails(productDetails);
    setProductDetails({
      productName: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            placeholder="Enter The Product Name"
            value={productName}
            name="productName"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Product Price</label>
          <input
            type="number"
            placeholder="Enter The Product Price"
            value={price}
            name="price"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            placeholder="Enter The Quantity"
            value={quantity}
            name="quantity"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Fom;
