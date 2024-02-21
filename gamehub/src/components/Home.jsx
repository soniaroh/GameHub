import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/game1">
          <button>Go to Game 1</button>
        </Link>
        <Link to="/game2">
          <button>Go to Game 2</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;