import React, { useState } from "react";

import StatefulExpenseItem from "./StatefulExpenseItem";
import StatefulUI from "../UI/StatefulUI";
import StatefulExpensesFilter from "./StatefulExpensesFilter";
import { IState } from "../../../../2-State/model/IState";

type StateArray = IState[]

const StatefulExpenses:React.FC<{items:StateArray}> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear:string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <StatefulUI >
        <StatefulExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items?.map((expense:IState) => (
          <StatefulExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </StatefulUI>
    </div>
  );
};

export default StatefulExpenses;
