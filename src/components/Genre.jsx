import React from "react";

export default function Genre() {
  return (
    <section className="py-12 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Browse By Genre
        </h2>

        {/* genre tabs */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            <button className="px-4 py-2 rounded-md transition-colors text-sm">
              Genre Name
            </button>
          </div>
        </div>

        {/* conditional rendering */}
        <div className="h-64 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* else */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden bg-neutral-800">
              <div className="aspect-2/3">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-yellow-400 text-sm font-medium">
                        Movies Vote Average
                      </span>
                    </div>
                    <span className="text-neutral-400 text-sm">
                      Movie Release Date
                    </span>
                  </div>

                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
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
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h3 className="text-white text-sm font-medium truncate">
              Movie Title
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h3.46c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-neutral-400 text-xs">
                  Movie Averange Rating
                </span>
              </div>
              <span className="text-neutral-400 text-xs">
                Movie Relase Date
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
