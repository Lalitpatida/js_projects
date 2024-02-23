import React, { useState } from 'react';
import './App.css';

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const GameBoard = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    if (calculateWinner(newSquares)) {
      setWinner(calculateWinner(newSquares));
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? 'It\'s a draw!'
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <GameBoard squares={squares} onClick={handleClick} />
      <div className="status">{status}</div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default App;