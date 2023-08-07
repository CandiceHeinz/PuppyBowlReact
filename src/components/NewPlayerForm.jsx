import React, { useState } from "react";

const NewPlayerForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerm] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevents reloading
    event.preventDefault();
    console.log("username", username);
    console.log("password", password);
    console.log("term", term);

    // POST REQUEST HERE

    // clears form back to default
    setUsername("");
    setPassword("");
    setTerm("");
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="term">term:</label>
        <input type="text" value={term} onChange={handleTermChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;