import React, { useReducer } from "react";
import { IReducers } from "../../model/IReducers";

type Increment = { type: "increment"; payload: number };
type Random = { type: "random" };
type AppActions = Increment | Random;

const reducer = (state: IReducers, action: AppActions) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "random":
      return { ...state, random: Math.random() };
    default:
      return state;
  }
};

const FirstReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, random: 0 });

  return (
    <div className="comp">
      <h1>Demo: React useReducer</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        "Increment" Action
      </button>
      <button onClick={() => dispatch({ type: "random" })}>
        "Random" Action
      </button>
      <p>{state.count}</p>
      <p>{state.random}</p>
    </div>
  );
};
export default FirstReducer;
