import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import PlayerPage from './pages/PlayerPage/PlayerPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
           <li>
             <NavLink to="/" exact={true} className="menu-item" activeStyle={{color: "#9146FF"}}>Home</NavLink>
           </li>
           <li>
             <NavLink to="/Games" className="menu-item" activeStyle={{color: "#9146FF"}}>Games</NavLink>
           </li>
           <li>
             <NavLink to="/Players" className="menu-item" activeStyle={{color: "#9146FF"}}>Players</NavLink>
           </li>
         </ul>
      </header>
      <div className="App-body">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Games">
            <GamePage />
          </Route>
          <Route path="/Players">
            <PlayerPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
