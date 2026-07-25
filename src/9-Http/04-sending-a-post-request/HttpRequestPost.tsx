import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import HttpRequestPostMoviesList from "./components/HttpRequestPostMoviesList";
import HttpRequestPostAddMovie from "./components/HttpRequestPostAddMovie";
import "./HttpRequestPost.css";
import { IHttp } from "../model/IHttp";

const HttpRequestPost: React.FC<IHttp> = () => {
  const [movies, setMovies] = useState<IHttp[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://corso-react-8a9f7-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.data) {
        throw new Error("Something went wrong!");
      }

      const data = response.data;
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error: any) {
      setError(error.message || "Impossibile caricare i film");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie: IHttp) => {
    try {
      const response = await axios.post(
        "https://corso-react-8a9f7-default-rtdb.firebaseio.com/movies.json",
        movie
      );
      console.log(response.data);
      fetchMoviesHandler(); // Ricarica i film dopo l'aggiunta
    } catch (error) {
      console.error("Errore aggiunta film:", error);
    }
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <HttpRequestPostMoviesList movies={movies} />;
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
        <HttpRequestPostAddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default HttpRequestPost;