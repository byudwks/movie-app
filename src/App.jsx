import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
    </div>
  );
}

export default App;
