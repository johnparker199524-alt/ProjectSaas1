import React from "react";

import StyleProps2 from "./StyleProps/StyleProps-2";
const StyleProps = () => {
  const expenses = [
    {
      id: "e1",
      title: "Film Drammatico",
      description: "Film Drammatico Description",
      type: "Drammatico",
      release: 2023,
    },

    {
      id: "e2",
      title: "Film Horror",
      description: "Film Horror Description",
      type: "Horror",
      release: 2022,
    },
    {
      id: "e3",
      title: "Film Commedia",
      description: "Film Commedia Description",
      type: "Commedia",
      release: 2021,
    },
    {
      id: "e4",
      title: "Film Action",
      description: "Film Action Description",
      type: "Action",
      release: 2020,
    },
  ];

  return (
    <div>
      <StyleProps2 items={expenses} />
    </div>
  );
};

export default StyleProps;
