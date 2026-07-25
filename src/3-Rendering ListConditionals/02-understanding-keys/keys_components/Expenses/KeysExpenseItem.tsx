import React from "react";
import { IState } from "../../../../2-State/model/IState";

const KeysExpenseItem: React.FC<IState> = (props) => {
  return (
   
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

  );
};

export default KeysExpenseItem;
