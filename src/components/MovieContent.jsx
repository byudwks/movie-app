import React from "react";
import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlider";
import Genre from "./Genre";
import MovieDetail from "./MovieDetail";
import { useMovies } from "../context/MovieContext";

export default function MovieContent() {
  const {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    selectedMovies,
    closeMovieDetail,
    error,
  } = useMovies();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold mt-4 "> Error Loading Movies </h2>
          <p className=" mt-2 text-neutral-400 ">{error}</p>
          <button
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md"
            onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending Movies In This Week"
          subtitle="Stay Updated With What Everyone Else Is Watching"
          movies={trendingMovies}
          id="trending"
        />
        <MovieSlider
          title="Popular Movies "
          subtitle="Most Polpular Movies Right Now"
          movies={popularMovies}
          id="popular"
        />
        <MovieSlider
          title="Top Rated Movies"
          subtitle="The Best Movies of All Time"
          movies={topRatedMovies}
          id="top-rated"
        />
        <Genre />
      </div>
    </>
  );
}
