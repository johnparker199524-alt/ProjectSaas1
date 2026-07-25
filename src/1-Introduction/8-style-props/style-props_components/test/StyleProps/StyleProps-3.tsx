
import React from "react";
import { IIntroduction } from "../../../../model/IIntroduction";

const StyleProps3: React.FC<IIntroduction> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.type}</p>
    </div>
  );
};

export default StyleProps3;
