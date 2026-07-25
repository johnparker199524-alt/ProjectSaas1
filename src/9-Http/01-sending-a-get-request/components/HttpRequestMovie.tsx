import React from "react";
import { IHttp } from "../../model/IHttp";
import classes from "./HttpRequestMovie.module.css";

const HttpRequestMovie: React.FC<IHttp> = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default HttpRequestMovie;
