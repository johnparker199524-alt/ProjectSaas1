import React from "react";
import { IHttp } from "../../model/IHttp";
import HttpRequestUseEffectMovie from "./HttpRequestUseEffectMovie";
import classes from "./HttpRequestUseEffectMoviesList.module.css";

const HttpRequestUseEffectMovieList: React.FC<IHttp> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies?.map((movie: IHttp) => (
        <HttpRequestUseEffectMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestUseEffectMovieList;
