import React from "react";
import HttpRequestMovie from "./HttpRequestMovie";
import classes from "./HttpRequestMoviesList.module.css";
import { IHttp } from "../../model/IHttp";

const HttpRequestMovieList: React.FC<IHttp> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies?.map((movie: IHttp) => (
        <HttpRequestMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestMovieList;
