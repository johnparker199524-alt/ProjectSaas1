import React from "react";
import { IHttp } from "../../model/IHttp";
import HttpRequestHandlingMovie from "./HttpRequestHandlingMovie";
import classes from "./HttpRequestHandlingMoviesList.module.css";

const HttpRequestHandlingMovieList: React.FC<IHttp> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies?.map((movie: IHttp) => (
        <HttpRequestHandlingMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestHandlingMovieList;
