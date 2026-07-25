import React from "react";
import StyleExpenses from "./style-props_components/StyleExpenses";

const StylePropsExpenses = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
    },
  ];

  return (
    <div>
      <StyleExpenses items={expenses} />
    </div>
  );
};

export default StylePropsExpenses;
