import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePlayer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to your SinglePlayer component route
    navigate("/SinglePlayer");
  };

  return (
    <div>
      {/* Your SinglePlayer component content */}
      <h2>Single Player Component</h2>
      <p>This is the content of the SinglePlayer component.</p>

      {/* Add the button */}
      <button onClick={handleButtonClick}>Go to SinglePlayer</button>
    </div>
  );
};

export default SinglePlayer;
