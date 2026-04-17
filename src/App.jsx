import React from "react";
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
