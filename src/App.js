import "./App.css";
import React, { useReducer, createContext } from "react";
import CompA from "./components/CompA"; // -> nothing
import CompB from "./components/CompB"; // -> redender D
import CompC from "./components/CompC"; // -> render E and render F

export const countContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

//context api in this case -> deliver the reducer method in any nested components
//reduce -> dispatch data for the data layer
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <div className="app__container">
          <div className="app__effect">
          <CompA />
          <CompB />
          <CompC />
          </div>
        </div>
      </div>
    </countContext.Provider>
  );
}

export default App;
