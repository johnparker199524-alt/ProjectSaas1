import React from "react";
import KeysExpenseForm from './KeysExpenseForm';


const KeysNewExpense:React.FC <{onAddExpense:(expenseData:any)=>void}> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData:any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <KeysExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default KeysNewExpense;
