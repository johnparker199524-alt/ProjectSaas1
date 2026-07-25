import React from "react";

const KeysExpensesFilter:React.FC<{onChangeFilter:(value:string)=>void,selected:string}> = (props) => {
  const dropdownChangeHandler = (event:React.FormEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.currentTarget.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default KeysExpensesFilter;
