
import React from "react";
import { IIntroduction } from "../../model/IIntroduction";
import "./StyleExpenseItem.css";

const StyleExpenseItem: React.FC<IIntroduction> = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
};

export default StyleExpenseItem;
