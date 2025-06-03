import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, playerNames) {
  let winner;
  for (const combine of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combine[0].row][combine[0].column];
    const secondSquare = gameBoard[combine[1].row][combine[1].column];
    const thirdSquare = gameBoard[combine[2].row][combine[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = playerNames[firstSquare];
    }
  }

  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState(PLAYERS);

  const activePlayerSymbol = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerNames);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((preTurns) => {
      let currPlayer = deriveActivePlayer(preTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function updatePlayerName(symbol, newName) {
    setPlayerNames((prev) => ({
      ...prev,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayerSymbol === "X"}
            onNameChange={updatePlayerName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayerSymbol === "O"}
            onNameChange={updatePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
