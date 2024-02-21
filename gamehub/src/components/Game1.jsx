import Board from './Board';
import { useState } from 'react';
export default function Game1() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentSquares, setCurrectSquares] = useState(history[history.length - 1]);
  const [nextMove, setNextMove] = useState('');

    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Refresh game';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)} className="game-button">{description}</button>
        </li>
      );
    })
  
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setCurrectSquares(nextSquares);
    
  }

  function jumpTo(nextMove) {
    setCurrectSquares(history[nextMove]);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquares}
          handlePlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}