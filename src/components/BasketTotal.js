import React, { useState } from "react";

const BasketTotal = ({ items }) => {
  
  let totalPrice = 0;
  console.log("----items", items);

  items.map((item) => {
    console.log(item.trackPrice);
    console.log(totalPrice);

    return (totalPrice = totalPrice + item.trackPrice);
  });

  return <div></div>;
};

export default BasketTotal;
