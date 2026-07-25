import React from "react";
import { IState } from "../../../../2-State/model/IState";
import StatefulUI from "../UI/StatefulUI";

const StatefulExpenseItem: React.FC<IState> = (props) => {
  return (
    <StatefulUI >
      <div >
        <h2>{props.title}</h2>
        <div >${props.amount}</div>
      </div>
    </StatefulUI>
  );
};

export default StatefulExpenseItem;
