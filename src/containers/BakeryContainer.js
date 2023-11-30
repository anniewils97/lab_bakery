import React, { useState } from "react";
import CakeList from "../components/CakeList";
import InventoryCounter from "../components/InventoryCounter";

const BakeryContainer = () => {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
      price: 5,
      rating: 5,
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      price: 2,
      rating: 3,
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      price: 8,
      rating: 5,
    },
  ]);

  const [totalSale, setTotalSale] = useState(0);
  const [totalCakesSold, setTotalCakesSold] = useState(0);

  const averageRating =
    cakes.reduce((sum, cake) => sum + cake.rating, 0) / cakes.length || 0;

  const handleSellCake = (cakeName, cakePrice) => {
    // Update total sale value when a cake is sold
    setTotalSale((prevTotalSale) => prevTotalSale + cakePrice);
    
    // Update the total cakes sold count
    setTotalCakesSold((prevTotalCakesSold) => prevTotalCakesSold + 1);

  };

  return (
    <div className="container">
      <h1>Welcome to Annie's Bakery</h1>
      <CakeList cakes={cakes} onSellCake={handleSellCake} />
      <InventoryCounter title="Average Rating" count={averageRating.toFixed(2)} />
      <InventoryCounter title="Total Sale Value" count={`£${totalSale.toFixed(2)}`} />
      <InventoryCounter title="Total Cakes Sold" count={totalCakesSold} />
    </div>
  );
};

export default BakeryContainer;
