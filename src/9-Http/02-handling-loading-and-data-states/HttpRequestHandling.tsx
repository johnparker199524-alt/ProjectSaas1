import React, { useState } from "react";
import HttpRequestHandlingMoviesList from "./components/HttpRequestHandlingMoviesList";
import "./HttpRequestHandling.css";
import { IHttp } from "../model/IHttp";
import axios from "axios";

const HttpRequestHandling: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await axios.get("https://swapi.py4e.com/api/films/");
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
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && (
          <HttpRequestHandlingMoviesList movies={movies} />
        )}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
};

export default HttpRequestHandling;
