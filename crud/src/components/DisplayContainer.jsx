const DisplayContainer = ({ details, deleteData, singleProduct }) => {
  return (
    <>
      {details.map((product) => {
        return (
          <div key={product.id}>
            <p>Product Name : {product.productName}</p>
            <p>Product Price : {product.price}</p>
            <p>Product Quantity : {product.quantity}</p>
            <button>Add To Cart</button>
            <button
              onClick={() => {
                singleProduct(product.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteData(product.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DisplayContainer;
