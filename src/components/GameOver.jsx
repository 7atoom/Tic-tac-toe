import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
