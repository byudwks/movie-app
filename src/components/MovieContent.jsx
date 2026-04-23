import React from "react";
import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlider";
import Genre from "./Genre";
import MovieDetail from "./MovieDetail";
import { useMovies } from "../context/MovieContext";

export default function MovieContent() {
  const { trendingMovies } = useMovies();
  return (
    <>
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Popular Movies In This Week"
          subtitle="Stay Updated With What Everyone Else Is Watching"
          movies={trendingMovies}
          id="trending"
        />
        <Genre />
      </div>
      {/* conditional rendering */}
      {/* <MovieDetail /> */}
    </>
  );
}
