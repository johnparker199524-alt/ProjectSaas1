import React from "react";
import { IIntroduction } from "../model/IIntroduction";

const ChildProps: React.FC<IIntroduction> = (props) => {
  return (
    <div>
      <p>{props.surname}</p>
      <p>{props.nation}</p>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </div>
  );
};

export default ChildProps;
