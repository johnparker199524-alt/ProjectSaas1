import React from "react";
import { IState } from "../model/IState";
import ExpenseItem from "./components/ExpensesItem/ExpenseItem";

const State: React.FC<IState> = () => {
  return (
    <div>
      <ExpenseItem />
    </div>
  );
};

export default State;
