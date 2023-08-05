import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div id="container">
      <h1>Puppy Bowl React</h1>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<h1>AllPlayers</h1>} />
          <Route path="/players/:id" element={<h1>SinglePlayer</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
