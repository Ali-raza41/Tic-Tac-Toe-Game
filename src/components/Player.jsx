import { useState } from "react";

export default function Player({ intialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = 'Edit';

  if (isEditing) {
    editableplayerName = (
      <input input="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
