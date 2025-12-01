import React from "react";
import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlider";
import Genre from "./Genre";
import MovieDetail from "./MovieDetail";

export default function MovieContent() {
  return (
    <>
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider />
        <Genre />
      </div>
      {/* conditional rendering */}
      <MovieDetail />
    </>
  );
}
