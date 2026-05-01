import React, { useState, useEffect, useRef } from "react";
import { getImageUrl, searchMovies } from "../services/api";
import { useMovies } from "../context/MovieContext";

function Navbar() {
  const { openMovieDetail } = useMovies();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim().length > 2) {
        setIsSearching(true);
        try {
          const result = await searchMovies(searchQuery);
          setSearchResults(result ? result.slice(0, 5) : []);
        } catch (error) {
          console.error("Error searching movies:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
          setShowSearchResults(true);
        }
      } else {
        setSearchResults(false);
        setShowSearchResults(false);
      }
    };
    const debounceTimeout = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchQuery]);

  const handleSearchFocus = () => {
    if (searchQuery.trim().length > 2 && searchResults.lenght > 0) {
      setShowSearchResults(true);
    }
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setShowSearchResults(false);
    }
  };

  const handleOpenMovie = (movieId) => {
    openMovieDetail(movieId);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  return (
    <header
      className={`fixed flex w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-neutral-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-indigo-500 font-bold text-3xl">
                film<span className="text-white">Box</span>
              </span>
            </a>
          </div>
          {/* dekstop menu navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Trending
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Populler
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Top Rated
            </a>
          </nav>

          {/* dekstop search */}
          <div
            className="hidden md:block relative search-container"
            ref={searchContainerRef}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onFocus={handleSearchFocus}
                placeholder="Search Movies..."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />

              {/* conditional rendering */}
              {isSearching ? (
                <div className="absolute right-3 top-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-400 absolute right-3 top-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
              {/* else */}
            </div>

            {/* search result dropdown conditional rendering */}
            {showSearchResults && searchResults && searchResults.length > 0 && (
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  {searchResults.map((movie) => {
                    return (
                      <li className="hover:bg-neural-700">
                        <button
                          className="flex items-center p-3 w-full text-left"
                          onClick={() => handleOpenMovie(movie.id)}>
                          <div className=" w-10 h-10 bg-neutral-600 rounded-md shrink-0">
                            {/* contional rendering search movie */}
                            {movie.poster_path ? (
                              <img
                                src={getImageUrl(movie.poster_path, "w92")}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-neural-500 text-sm">
                                {""}
                                No Image
                              </div>
                            )}
                          </div>

                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-white truncate">
                              {movie.title}
                            </p>
                            <p className="text-sm font-medium text-white truncate">
                              {movie.release_date?.split("-")[0] || "N/A"}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {/* conditional Rendering */}
            {showSearchResults &&
              searchQuery.trim().length > 2 &&
              (!searchResults || searchResults.length === 0) &&
              !isSearching && (
                <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="p-4 text-center text-neutral-400 text-sm">
                    No Movies Found Matching...
                  </div>
                </div>
              )}
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {/* conditional rendering */}
            {isMobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Conditional Rendering */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 space-y-4 md:hidden flex flex-col">
            <a
              href="#"
              className="block text-white hover:text-indigo-400 transition-colors ">
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Trending
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Populler
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-400 transition-all font-medium">
              Top Rated
            </a>
            <div
              className="relative mt-3 search-container"
              ref={searchContainerRef}>
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onFocus={handleSearchFocus}
                type="text"
                placeholder="Search Movies..."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />

              {/* contional rendering */}
              {isSearching ? (
                <div className="absolute right-3 top-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {/* else */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white absolute right-3 top-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white absolute right-3 top-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}

              {/* mobile search result conditional rendering */}
              {showSearchResults &&
                searchResults &&
                searchResults.length > 0 && (
                  <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <ul className="divide-neutral-700 divide-y">
                      {/* map method  */}
                      {searchResults.map((movie) => {
                        return (
                          <li className="hover:bg-neutral-700">
                            <button className="flex items-center p-3 w-full text-left">
                              <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden shrink-0">
                                {/* conditional rendering */}
                                <img
                                  src={getImageUrl(movie.poster_path, "w92")}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                                {/* else */}
                                <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
                                  No Image
                                </div>
                              </div>

                              <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-white truncate">
                                  {movie.title}
                                </p>
                                <p className="text-sm text-neutral-400">
                                  {movie.release_date?.split("-")[0] || "N/A"}
                                </p>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

              {/* conditional rendering */}
              {showSearchResults &&
                searchQuery.trim().length > 2 &&
                (!searchResults || searchResults.length === 0) &&
                !isSearching && (
                  <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 text-center text-neutral-400 text-sm">
                      No Movies Found Matching...
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
