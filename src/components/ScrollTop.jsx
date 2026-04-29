import React, { useState, useEffect, useCallback } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full 
          transition-all duration-300
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-50 pointer-events-none"
          }
        `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
