import React from "react";
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <MovieContent />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </MovieProvider>
  );
}

export default App;
