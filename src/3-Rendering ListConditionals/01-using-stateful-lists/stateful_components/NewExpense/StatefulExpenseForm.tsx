import React, { useState } from "react";
import { IState } from "../../../../2-State/model/IState";

const StatefulExpenseForm:React.FC<{onSaveExpenseData:(expenseData:any)=>void}>=(props) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");

  const titleChangeHandler = (event:React.FormEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
  };

  const amountChangeHandler = (event:React.FormEvent<HTMLInputElement>) => {
    setEnteredAmount(event.currentTarget.value);
  };

  const dateChangeHandler = (event:React.FormEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.value);
  };

  const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default StatefulExpenseForm;
