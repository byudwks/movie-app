import React from "react";
import { useMovies } from "../context/MovieContext";
import { getImageUrl } from "../services/api";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { trendingMovies, loading } = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const featuredMovie = trendingMovies.slice(0, 5);

  useEffect(() => {
    if (loading || featuredMovie.length === 0) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000); // Naikkan durasi sedikit agar tidak terlalu cepat

    return () => clearInterval(interval);
  }, [loading, featuredMovie.length, currentSlide]);

  // Fungsi navigasi yang smooth
  const handleNextSlide = (index = null) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Memberi waktu fade out (sesuai durasi transition di CSS)
    setTimeout(() => {
      if (index !== null) {
        setCurrentSlide(index);
      } else {
        setCurrentSlide((prev) => (prev + 1) % featuredMovie.length);
      }
      setIsTransitioning(false);
    }, 700);
  };

  if (loading || featuredMovie.length === 0) {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-neutral-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
          <p className="mt-4 text-neutral-400">Loading Movies....</p>
        </div>
      </div>
    );
  }
  const currentMovie = featuredMovie[currentSlide];
  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* movies backdrop */}
      {featuredMovie.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
          style={{
            backgroundImage: `url(${getImageUrl(movie.backdrop_path)})`,
            // Force hardware acceleration
            transform: "translateZ(0)",
          }}>
          {/* Gradients */}
          <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* content */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        {/* movies info */}
        <div
          className={`transition-all duration-700 ${isTransitioning ? "opacity-0" : " opacity-100"}`}>
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-indigo-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
              Feature
            </span>

            {/* conditional rendering */}
            <div className="flex items-center">
              {currentMovie.vote_average > 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              )}
              <span className="text-neutral-300">
                {formatRating(currentMovie.vote_average) || "N/A"}
              </span>
            </div>

            <span className="text-neutral-400">.</span>
            <span className="text-neutral-300">
              {currentMovie.release_date?.substring(0, 4) || "N/A"}
            </span>

            {currentMovie.adult && (
              <>
                {" "}
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-1.5 py-0.5">
                  18+
                </span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {currentMovie.title}
          </h1>
          <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
            {currentMovie.overview}
          </p>

          <div className="flex flex-wrap gap-4 ">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Now
            </button>

            <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add To Watch List
            </button>
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-30">
        {featuredMovie.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNextSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === index
                ? "bg-indigo-500 w-12"
                : "bg-gray-500 w-2 hover:bg-indigo-500/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
