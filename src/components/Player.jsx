import { useState } from "react";

function Player({ name, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function HandleEdit() {
    if (isEditing) {
      onNameChange(symbol, playerName); // Notify parent about the name change
    }
    setIsEditing((prev) => !prev);
  }

  function HandleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            type="text"
            required
            value={playerName}
            onChange={HandleChange}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
      </span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={HandleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
