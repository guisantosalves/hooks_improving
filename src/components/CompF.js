import React, {useContext} from "react";
import {countContext} from "../App"

function CompF() {

  const countContextF = useContext(countContext)

  return (
    <div>
      <h4>Component F - {countContextF.countState}</h4>
      <div>
        <button onClick={() => countContextF.countDispatch("increment")}>
          Increment
        </button>
        <button onClick={() => countContextF.countDispatch("decrement")}>
          decrement
        </button>
        <button onClick={() => countContextF.countDispatch("reset")}>
          reset
        </button>
      </div>
    </div>
  );
}

export default CompF;
