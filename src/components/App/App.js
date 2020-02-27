import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login'
import AllMocktails from '../AllMocktails/AllMocktails'
import './App.css';

function App() {
  return (
    <main className="App">
      <header>
        <h1>MocktaiLV</h1>
        <Switch>
          <Route exact path='/AllMocktails/LoggedIn' component={AllMocktails} />
        </Switch>
      </header>
      <Login />
    </main>
  );
}

export default App;
