import React from "react";
import { IIntroduction } from '../../model/IIntroduction';
import StyleExpenseItem from './StyleExpenseItem';
import './StyleExpenses.css';

type Items = IIntroduction[]


const StyleExpenses:React.FC<{items:Items}>=(props)=> {
  return (
    <div className="expenses">
      <StyleExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
      
      />
      <StyleExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
      
      />
      <StyleExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
      
      />
     
    </div>
  );
}

export default StyleExpenses;
