import { useState } from "react";

const InventoryCounter = ({title, count}) => {
    return (
        <>
        <h3>{title}</h3>
        <p>{count}</p>
        </>
      );
}
 
export default InventoryCounter;