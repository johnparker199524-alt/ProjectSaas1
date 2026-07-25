import React from "react";

import Props from "./props-components/Props";

const PropsData = () => {
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
  ];

  return (
    <div>
      <Props title={expenses[0].title}
        amount={expenses[0].amount}></Props>
      <Props title={expenses[1].title}
        amount={expenses[1].amount}></Props>
      <Props title={expenses[2].title}
        amount={expenses[2].amount}></Props>
    </div>
  );
};

export default PropsData;
