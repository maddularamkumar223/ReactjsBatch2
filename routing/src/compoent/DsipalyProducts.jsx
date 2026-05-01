import { Link } from "react-router-dom";

const DsipalyProducts = ({ filterProducts }) => {
  return (
    <div>
      {filterProducts.map((value) => {
        return (
          <>
            <p>{value.productName}</p>
            <p>{value.price}</p>
            <Link to={`/singleProduct/${value.id}`}>View More</Link>
          </>
        );
      })}
    </div>
  );
};

export default DsipalyProducts;
