import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Home from './Home';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/game1" component={Game1} />
//         <Route path="/game2" component={Game2} />
//         <Route path="/game3" component={Game3} />
//         <Route exact path="/" component={Home} />
//       </Switch>
//     </Router>
//   );
// }


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game1" component={Game1} />
        <Route path="/game2" component={Game2} />
        <Route path="/game3" component={Game3} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
