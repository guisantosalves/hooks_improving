import React, { useContext } from "react";
import { countContext } from "../App";

function CompA() {
  const countContextA = useContext(countContext);

  return (
    <div>
      <h4>Component A - {countContextA.countState}</h4>
      <div>
      <button 
        onClick={() => countContextA.countDispatch("increment")}>
        Increment
      </button>
      <button 
        onClick={() => countContextA.countDispatch("decrement")}>
        decrement
      </button>
      <button 
        onClick={() => countContextA.countDispatch("reset")}>
        reset
      </button>
      </div>
    </div>
  );
}

export default CompA;
