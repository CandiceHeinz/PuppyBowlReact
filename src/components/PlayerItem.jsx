import React from "react";
function PlayerItem({ player }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div id="player-item">
      <img
        className="player-image"
        src={"${player.imageUrl}"}
        alt={"${player.name}"}
      />
      <h3 className="player-name">{player.name}</h3>
      <p className="player-breed">Breed: {player.breed}</p>
      <p className="player-status">Status: {player.status}</p>
      <button className="delete-btn" onClick={() => handleClick(player.id)}>
        Click Here
      </button>
    </div>
  );
}

export default PlayerItem;
