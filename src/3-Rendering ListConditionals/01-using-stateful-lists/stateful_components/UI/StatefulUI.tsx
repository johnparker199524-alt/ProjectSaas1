import React from "react";
import { IState } from "../../../../2-State/model/IState";

const StatefulUI: React.FC<IState> = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default StatefulUI;
