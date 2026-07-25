
import React from "react";
import { IState } from "../../../../2-State/model/IState";
import StatefulExpenseForm from "./StatefulExpenseForm";

const StatefulNewExpense:React.FC<{onAddExpense:(expenseData:IState[])=>void}>= (props) => {
  const saveExpenseDataHandler = (enteredExpenseData:any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <StatefulExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default StatefulNewExpense;
