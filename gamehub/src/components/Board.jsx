import { useState, useEffect } from "react";
import Square from "./Square";

export default function Board({xIsNext, squares, handlePlay}) {
  const [status, setStatus] = useState(null);

  useEffect(() => { 
const winner = calculateWinner(squares);
  if (winner) setStatus( `Winner: ${winner}`);
  else setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
  },[squares, xIsNext])

  const calculateWinner = (board) => {
  // List of indexes of all possible winning combinations
 const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  // Check each winning combination
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return the winning symbol ('X' or 'O')
    }
  }

  return null; // No winner
}

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = 'X';
      else nextSquares[i] = 'O';
    handlePlay(nextSquares)
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
