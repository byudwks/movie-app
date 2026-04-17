const API_Key = "ab3d46f7066e7894f577bfc693930456";
const BASE_Url = "https://www.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_Url}/movie/popular?api_key=${API_Key}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchTopMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_Url}/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching top movies:", error);
    return [];
  }
};

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(
      `${BASE_Url}/discover/movie?api_key=${API_Key}&with_genres=${genreId}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return [];
  }
};

export const fetchGenre = async () => {
  try {
    const response = await fetch(
      `${BASE_Url}/genre/movie/list?api_key=${API_Key}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_Url}/movie/${movieId}?api_key=${API_Key}&language=en-US`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_Url}/search/movie?api_key=${API_Key}&language=en-US&query=${encodeURIComponent(query)}&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
