import React, { useState } from "react";
import "./ExpenseItem.css";
import { IState } from "../../../model/IState";

const ExpenseItem: React.FC<IState> = () => {
  const [web, setWeb] = useState<string | null>("");
  const [id, setId] = useState<IState | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const clickHandler = () => {
    setWeb("React");
    setId({ title: "Welcome to use State" });
    setCounter(counter + 1);
  };

  return (
    <div>
      <div className="expense-item__description">
        <h2>{web}</h2>
        <h2 style={{ marginLeft: "10px", marginRight: "10px" }}>{counter}</h2>
        <h2>{id?.title}</h2>
      </div>
      <button className="expense-button" onClick={clickHandler}>
        Change Title
      </button>
    </div>
  );
};

export default ExpenseItem;
