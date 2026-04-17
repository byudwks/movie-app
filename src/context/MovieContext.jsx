import { createdContext, useContext, useState, useEffect } from "react";
import {
  fetchMovies,
  fetchTopMovies,
  fetchMoviesByGenre,
  fetchGenre,
  fetchMovieDetails,
  searchMovies,
} from "..services/api";

const MovieContext = createdContext();

export const MovieProvider = ({ children }) => {
  useContext(MovieContext);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        setLoading(true);
        const [trending, popular, topRates, genreList] = await Promise.all([
          fetchMovies(),
          fetchTopMovies(),
          fetchGenre(),
        ]);
        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRates);
        setGenres(genreList);
      } catch (error) {
        console.log("Error fetching movies:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  });
};
