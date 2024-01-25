import { useState, useEffect } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => { 
const winner = calculateWinner(squares);
  if (winner) setStatus( `Winner: ${winner}`);
  else setStatus(`Next player: ${isNextX ? 'X' : 'O'}`);
  },[squares, isNextX])

  const calculateWinner = (board) => {
  // Check rows, columns, and diagonals for a winner
  for (let i = 0; i < board.length/3; i++) {
    // Check rows
    if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return board[i];
    }
    // Check columns
    if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i];
    }
  }

  // Check diagonals
    if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return board[0];
  }
    if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  }

  // No winner
  return null;
}

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (isNextX) nextSquares[i] = 'X';
      else nextSquares[i] = 'O';
    setIsNextX(!isNextX);
    setSquares(nextSquares);
  };

  
  return (
    <>
      <h1>{status}</h1>
      <div className= "row" >
        <Square value={ squares[0] } onSquareClick = {() => handleClick(0)}/>
        <Square value = { squares[1]} onSquareClick = {() => handleClick(1)} />
        <Square value = { squares[2]} onSquareClick = {() => handleClick(2)} />
      </div>
      <div className = "row" >
        <Square value={ squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value = { squares[4]} onSquareClick = {() => handleClick(4)} />
        <Square value = { squares[5]} onSquareClick = {() => handleClick(5)} />
      </div>
      <div className="row" >
        <Square value={ squares[6]} onSquareClick = {() => handleClick(6)}/>
        <Square value = { squares[7]} onSquareClick = {() => handleClick(7)} />
        <Square value = { squares[8]} onSquareClick = {() => handleClick(8)} />
      </div>
    </>
  );
}
