import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="button-container">
        <Link to="/game1">
          <button className="game-button">Go to Game 1</button>
        </Link>
        <Link to="/game2">
          <button className="game-button">Go to Game 2</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;