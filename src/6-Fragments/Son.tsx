import React, { Fragment } from "react";
import Daughter from "./Daughter";

const Son: React.FC<{
  name: string;
  surname: string;
  age: number;
  job: string;
}> = (props) => {
  return (
    <Fragment>
      <ol>
        <li>{props.name}</li>
        <li>{props.surname}</li>
        <li>{props.age}</li>
        <li>{props.job}</li>
      </ol>

      <Daughter
        name="Rosanna"
        surname="Bianchi"
        age={44}
        job="Docente di Inglese"
      />
    </Fragment>
  );
};

export default Son;
