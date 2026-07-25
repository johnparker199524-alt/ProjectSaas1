import axios from "axios";
import React, { useState } from "react";
import { IHttp } from "../../model/IHttp";
import HttpRequestMoviesList from "../components/HttpRequestMoviesList";

const baseURL = "https://swapi.py4e.com/api/films";

const ReactGet = () => {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      const transformedMovies = response.data.results.map(
        (movieData: IHttp) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        }
      );
      setMovies(transformedMovies);
    });
  });

  return (
    <React.Fragment>
      <section>
        <HttpRequestMoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
};

export default ReactGet;
