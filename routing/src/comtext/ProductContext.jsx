import { createContext } from "react";

export let productContext = createContext();

let ProductProvider = ({ children }) => {
  let products = [
    {
      id: 1,
      productName: "Shirt",
      price: 200,
      category: "men",
    },
    {
      id: 2,
      productName: "T-Shirt",
      price: 200,
      category: "men",
    },
    {
      id: 3,
      productName: "Kurthi",
      price: 200,
      category: "women",
    },
    {
      id: 4,
      productName: "Women Shirt",
      price: 200,
      category: "women",
    },
    {
      id: 5,
      productName: "Kids T-shirt",
      price: 200,
      category: "kids",
    },
    {
      id: 6,
      productName: "Kids Jeans",
      price: 200,
      category: "kids",
    },
  ];
  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};
export default ProductProvider;
