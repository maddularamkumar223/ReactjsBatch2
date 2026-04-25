const Fom = ({ productDetails, handleChange, handleSubmit }) => {
  let { productName, price, quantity } = productDetails;

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
