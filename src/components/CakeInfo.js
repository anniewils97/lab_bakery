import React from 'react';

const CakeInfo = ({ cake, onSellCake }) => {
    const handleSellCake = () => {
        onSellCake(cake.cakeName, cake.price);
    };
  return (
    <>
      <h3>{cake.cakeName}</h3>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: £{cake.price}</p>
      <p>Rating: {cake.rating} ⭐️</p>
      <button onClick={handleSellCake}>Sell Cake</button>
    </>
  );
};

export default CakeInfo;