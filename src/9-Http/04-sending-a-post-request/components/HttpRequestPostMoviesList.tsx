import React from "react";

import { IHttp } from "../../model/IHttp";
import HttpRequestPostMovie from "./HttpRequestPostMovie";
import classes from "./HttpRequestPostMoviesList.module.css";

const HttpRequestPostMovieList: React.FC<IHttp> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies?.map((movie: IHttp) => (
        <HttpRequestPostMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestPostMovieList;
