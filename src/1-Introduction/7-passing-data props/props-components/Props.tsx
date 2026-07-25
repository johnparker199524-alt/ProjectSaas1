
import React from "react";
import { IIntroduction } from "../../model/IIntroduction";

const Props: React.FC<IIntroduction> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>${props.amount}</div>
    </div>
  );
};

export default Props;
