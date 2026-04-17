import React from "react";

export default function ScrollTop() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        className={`bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-full transition-all shadow-lg focus:outline-none focus:ring-indigo-300 duration-300`}
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19V5m0 0l-7 7m7-7l7 7"
          />
        </svg>
      </button>
    </div>
  );
}
