import React, { useState, useEffect, useCallback } from "react";

import HttpRequestUseEffectMoviesList from "./components/HttpRequestUseEffectMoviesList";
import "./HttpRequestUseEffect.css";
import { IHttp } from "../model/IHttp";
import axios from "axios";

const HttpRequestUseEffect: React.FC<{}> = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState<string>("");

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    //setError(null);
    try {
      const response = await axios.get("https://swapi.py4e.com/api/films/");
      if (!response.data) {
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      const transformedMovies = data.results.map((movieData: IHttp) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      //setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <HttpRequestUseEffectMoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default HttpRequestUseEffect;
