import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div>
        Blah
      </div>
      <div id="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Players" element={<AllPlayers />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
