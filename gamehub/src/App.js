import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
      </Routes>
    </Router>
  );
}

export default App;
