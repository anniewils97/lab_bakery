import React from "react";
import CakeInfo from './CakeInfo';

const CakeList = ({ cakes, onSellCake }) => {
    return (
      <div className="cake-container">
        <h2>Cakes on Offer:</h2> 
        {/* {cakes.map((cake) => (
          <CakeInfo key={cake.cakeName} cake={cake} onSellCake={onSellCake} />
        ))} */}
        {cakes.map((cake) => (
        <div key={cake.cakeName} className="cake-box">
          <CakeInfo cake={cake} onSellCake={onSellCake} />
        </div>
        ))}
      </div>
    );
  };
  
  export default CakeList;