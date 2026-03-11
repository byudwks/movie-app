import React from "react";

export default function MovieDetail() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[900vh] overflow-hidden">
        {/* close button */}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
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
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse">
            <div className="w-16 h-16 border border-indigo-500 border-t-transparent rounded-full animate-spin">
              <p>Loading Details...</p>
            </div>
          </div>
          {/* else  */}
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
                  d="M12 9v2m0 4h.01m -6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4">
                Failed to load movie details
              </h2>
              <p className="mt-2 text-neutral-400">Error</p>
              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-md">
                Close
              </button>
            </div>
          </div>
          {/* Else */}
          <div>
            {/* Backdrop Header */}
            <div className="relative h-72 md:h-96 w-full">
              {/* conditional rendering */}
              <img src="" alt="" className="w-full h-full object-cover" />
              {/* Else */}
              <div className="w-full h-full bg-neutral-700"></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 mt-32 md:-mt-48 relative">
                {/* Poster */}
                <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                    {/* Conditional Rendering */}
                    <img src="" alt="" className="w-full h-auto" />
                    {/* Else */}
                    <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center ">
                      No Poster Available
                    </div>
                  </div>
                </div>

                {/* Movies info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Movie Title
                    {/* Conditipnla Rendering */}
                    <span className="text-neutral-400 font-normal ml-2"></span>
                  </h1>

                  {/* Rating Anf other Meta */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                    {/* Conditional Rendering */}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-500"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <span className="ml-1 font-medium">
                        Movie Vote Averange
                      </span>
                    </div>
                    {/* Else */}
                    <span className="text-neutral-300">Movie Runtime</span>
                    {/* Conditional Rendering */}
                    <span className="text-neutral-300">Movie Relase Date</span>
                    {/* Conditional Rendering */}
                    <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded ">
                      18+
                    </span>
                  </div>

                  {/*Genres*/}
                  {/* Conditional Rendering */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Genre Name
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mt-4 text-neutral-400 italic">Movie Tagline</p>
                  {/* Overview */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      Overview
                    </h2>
                    <p className="text-neutral-300">Movie Overview</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        />
                      </svg>
                      Watch Now
                    </button>
                    <div className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
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
                    </div>
                  </div>
                </div>
                {/* Additonal  Details */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4"></h2>
                    <div className="space-y-4">
                      {/* contional renderign */}
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Productions Companies
                        </h3>
                        <p className="text-white">
                          Movies Productions Counties
                        </p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Languages
                        </h3>
                        <p className="text-white">Language</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Budgets
                        </h3>
                        <p className="text-white">Movies Budget</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Revenue
                        </h3>
                        <p className="text-white">Revenue</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">Status</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">Original Language</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Rating
                    </h2>
                    {/* Conditional Rendering */}
                    <div className="flex items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-indigo-500 flex items-center justify-center mr-4">
                        <span className="text-3xl font-bold">
                          Movie Averange
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-700">Votes</p>
                    <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                      <div className="bg-indigo-600 h-2.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* else */}
                <p className="text-neutral-400">No rating available</p>
              </div>
              {/* Imdb and homepage link */}
              <div className="mt-8 space-y-4">
                {/* conditional rendering */}
                <a
                  href=""
                  className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Official Website
                </a>
                {/* contional rendering */}
                <a
                  href=""
                  className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transiton-colors">
                  <svg></svg>View On Imdb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
