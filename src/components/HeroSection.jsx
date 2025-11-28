import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* movies backdrop */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700`}>
        {/* gradient overlay */}
        <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
          {/* movies info */}
          <div className={`transition-all duration-700`}>
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-indigo-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                Feature
              </span>

              {/* conditional rendering */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-neutral-300">Movie Voting Average</span>
              </div>

              <span className="text-neutral-400">.</span>
              <span className="text-neutral-300">Movie Release Date</span>

              <>
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-1.5 py-0.5">
                  18+
                </span>
              </>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Movie Title
            </h1>
            <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
              Movie Overview
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
      </div>

      {/* pagination */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        <button className={`h-1.5 rounded-full transition-all`}></button>
      </div>
    </div>
  );
}
