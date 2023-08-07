import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Home from "./components/Home";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/AllPlayers">AllPlayers</Link>
          </li>
          <br />
          <li>
            <Link to="/SinglePlayer">SinglePlayer</Link>
          </li>
          <br />
          <li>
            <Link to="/NewPlayerForm">NewPlayerForm</Link>
          </li>
        </ul>
      </nav>
      <div id="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllPlayers" element={<AllPlayers />} />
          <Route path="/SinglePlayer" element={<SinglePlayer />} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

