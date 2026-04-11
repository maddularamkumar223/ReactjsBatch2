import React, { useState } from "react";
import DisplayClothData from "./DisplayClothData";

const ClothingData = () => {
  let [categoryValue, setCategoryValue] = useState(null);
  let cloths = [
    {
      id: 1,
      cloth: "Men t-shirt",
      category: "men",
    },
    {
      id: 2,
      cloth: "Men-shirt",
      category: "men",
    },
    {
      id: 3,
      cloth: "Women T-shirt",
      category: "women",
    },
    {
      id: 4,
      cloth: "Women Shirt",
      category: "women",
    },
    {
      id: 5,
      cloth: "Kids T-shirt",
      category: "kids",
    },
    {
      id: 6,
      cloth: "Kids shirt",
      category: "kids",
    },
  ];

  let filterClothes = (categoryData) => {
    // let filterClothsData = cloths.filter(
    //   (value) => value.category === categoryData,
    // );
    // return filterClothsData;

    let filterClotheData = [];
    for (let i = 0; i < cloths.length; i++) {
      if (cloths[i].category === categoryData) {
        filterClotheData.push(cloths[i]);
      }
    }
    return filterClotheData;
  };

  return (
    <div>
      <button onClick={() => setCategoryValue("men")}>Men</button>
      <button onClick={() => setCategoryValue("women")}>Women</button>
      <button onClick={() => setCategoryValue("kids")}>Kids</button>
      {/* <section>
        {categoryValue === null
          ? cloths.map((value) => {
              return (
                <>
                  <h1>Product: {value.cloth}</h1>
                </>
              );
            })
          : filterClothes(categoryValue).map((value) => {
              return (
                <>
                  <h1>Product:{value.cloth}</h1>
                </>
              );
            })}
      </section> */}
      <section>
        {categoryValue === null ? (
          <DisplayClothData data={cloths} />
        ) : (
          <DisplayClothData data={filterClothes(categoryValue)} />
        )}
      </section>
    </div>
  );
};

export default ClothingData;
