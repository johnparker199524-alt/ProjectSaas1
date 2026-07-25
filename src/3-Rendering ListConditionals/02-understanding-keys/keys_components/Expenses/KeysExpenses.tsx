import React, { useState } from 'react';

import KeysExpenseItem from './KeysExpenseItem';
import KeysExpensesFilter from './KeysExpensesFilter';
import { IState } from '../../../../2-State/model/IState';
type StateArray = IState[];

const KeysExpenses:React.FC<{items:StateArray}> = (props) => {
  const [filteredYear, setFilteredYear] = useState<string>('2020');

  const filterChangeHandler = (selectedYear:string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>

        <KeysExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items?.map((expense:IState) => (
          <KeysExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};

export default KeysExpenses;
