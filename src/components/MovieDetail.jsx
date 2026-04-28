import React from "react";
import { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { getImageUrl } from "../services/api";

export default function MovieDetail({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setLoading(true);
        const movieData = await fetchMoviesDetails(movieId);
        setMovie(movieData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  if (!movieId) return null;

  const formatingRunTime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const formatRevenue = (revenue) => {
    if (!revenue) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      cureency: "USD",
      natation: "compact",
      maximumFractionDigits: 1,
    }).format(revenue);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* conditional rendering */}
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white animate-pulse">Loading Details...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-96 ">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4 text-white">
                Failed to load movie details
              </h2>
              <p className="mt-2 text-neutral-400">{error.message}</p>
              <button
                onClick={onClose}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
        ) : movie ? (
          <div>
            {/* Backdrop Header */}
            <div className="relative h-72 md:h-96 w-full">
              {movie.backdrop_path ? (
                <img
                  src={getImageUrl(movie.backdrop_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-700"></div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 mt-32 md:-mt-48 relative">
                {/* Poster */}
                <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700 bg-neutral-800">
                    {movie.poster_path ? (
                      <img
                        src={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center text-white text-center p-4">
                        No Poster Available
                      </div>
                    )}
                  </div>
                </div>

                {/* Movies info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {movie.title}
                    {movie.release_date && (
                      <span className="text-neutral-400 font-normal ml-2">
                        ({movie.release_date.substring(0, 4)})
                      </span>
                    )}
                  </h1>

                  {/* Rating And other Meta */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center text-white">
                    {movie.vote_average > 0 && (
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-medium">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                    )}

                    {movie.runtime > 0 && (
                      <span className="text-neutral-300">
                        {formatingRunTime(movie.runtime)}
                      </span>
                    )}
                    {movie.release_date && (
                      <span className="text-neutral-300">
                        {movie.release_date}
                      </span>
                    )}
                    {movie.adult && (
                      <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">
                        18+
                      </span>
                    )}
                  </div>

                  {/* Genres */}
                  {movie.genres && movie.genres.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {movie.genres.map((genre) => (
                        <span
                          key={genre.id}
                          className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tagline */}
                  {movie.tagline && (
                    <p className="mt-4 text-neutral-400 italic">
                      {movie.tagline}
                    </p>
                  )}

                  {/* Overview */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      Overview
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      {movie.overview || "No overview available."}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
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
                      Add To Watchlist
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-700 pt-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Details
                  </h2>
                  {movie.production_companies?.length > 0 && (
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Production Companies
                      </h3>
                      <p className="text-white">
                        {movie.production_companies
                          .map((c) => c.name)
                          .join(", ")}
                      </p>
                    </div>
                  )}
                  {movie.production_countries?.length > 0 && (
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Production Countries
                      </h3>
                      <p className="text-white">
                        {movie.production_countries
                          .map((c) => c.name)
                          .join(", ")}
                      </p>
                    </div>
                  )}
                  {movie.spoken_languages?.length > 0 && (
                    <div>
                      <h3 className="text-neutral-400 text-sm mb-1">
                        Languages
                      </h3>
                      <p className="text-white">
                        {movie.spoken_languages
                          .map((l) => l.english_name)
                          .join(", ")}
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    {movie.budget > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Budget
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.budget)}
                        </p>
                      </div>
                    )}
                    {movie.revenue > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Revenue
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.revenue)}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {movie.status && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">{movie.status}</p>
                      </div>
                    )}
                    {movie.original_language && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">
                          {movie.original_language.toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column (Rating) */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Rating
                  </h2>
                  {movie.vote_average > 0 ? (
                    <div className="bg-neutral-700/30 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-20 h-20 rounded-full border-4 border-indigo-500 flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold text-white">
                            {formatRating(movie.vote_average)}
                          </span>
                        </div>
                        <div>
                          <p className="text-neutral-300">
                            From {movie.vote_count.toLocaleString()} Votes
                          </p>
                          <div className="w-full bg-neutral-700 rounded-full h-2 mt-2 min-w-[150px]">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{
                                width: `${(movie.vote_average / 10) * 100}%`,
                              }}></div>
                          </div>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-3 mt-6">
                        {movie.homepage && (
                          <a
                            href={movie.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                            Official Website
                          </a>
                        )}
                        {movie.imdb_id && (
                          <a
                            href={`https://www.imdb.com/title/${movie.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors">
                            <span className="font-bold border border-yellow-500 px-1 rounded text-xs mr-2">
                              IMDb
                            </span>
                            View on IMDb
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-neutral-400">No rating available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
