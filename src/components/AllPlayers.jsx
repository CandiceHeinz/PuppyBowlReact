import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../API/index.js";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayersData() {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    }

    fetchPlayersData();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h4>{player.name}</h4>
          {/* ...whatever you want to display */}
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;








