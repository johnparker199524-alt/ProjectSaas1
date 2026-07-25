import React from "react";

const Daughter: React.FC<{
  name: string;
  surname: string;
  age: number;
  job: string;
}> = (props) => {
  return (
    <React.Fragment>
      <ol>
        <li>{props.name}</li>
        <li>{props.surname}</li>
        <li>{props.age}</li>
        <li>{props.job}</li>
      </ol>
    </React.Fragment>
  );
};

export default Daughter;
