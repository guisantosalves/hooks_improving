import React,{useContext} from 'react'
import {countContext} from "../App"

function CompD() {

  const countContextD = useContext(countContext)

  return (
    <div>
      <h4>Component D - {countContextD.countState}</h4>
      <div>
      <button 
        onClick={() => countContextD.countDispatch("increment")}>
        Increment
      </button>
      <button 
        onClick={() => countContextD.countDispatch("decrement")}>
        decrement
      </button>
      <button 
        onClick={() => countContextD.countDispatch("reset")}>
        reset
      </button>
      </div>
    </div>
  )
}

export default CompD