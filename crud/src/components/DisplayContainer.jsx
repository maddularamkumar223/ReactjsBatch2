const DisplayContainer = ({ details }) => {
  return (
    <>
      {details.map((product) => {
        return (
          <div>
            <p>Product Name : {product.productName}</p>
            <p>Product Price : {product.price}</p>
            <p>Product Quantity : {product.quantity}</p>
            <button>Add To Cart</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default DisplayContainer;
