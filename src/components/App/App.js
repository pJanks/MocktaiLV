import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login/Login'
import AllMocktails from '../AllMocktails/AllMocktails'
import DrinkDetails from '../DrinkDetails/DrinkDetails'
import BadPathPage from '../BadPathPage/BadPathPage'
import OffTheWagon from '../OffTheWagon/OffTheWagon'
import Nav from '../Nav/Nav'
import SignUp from '../SignUp/SignUp'
import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types'
import './App.css';

export class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>MocktaiLV</h1>
        </header>
        <Switch>
          <Route exact path='/MocktaiLV' component={Login} />
          <Route exact path='/AllMocktails' component={AllMocktails} />
          <Route exact path={`/DrinkDetails${this.props.selectedDrink.idDrink}`} render={() => <DrinkDetails drink={this.props.selectedDrink} />} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/OffTheWagon' component={OffTheWagon} />
          <Route exact path='/Favorites' render={() => <Favorites user={this.props.user} />} />
          <BadPathPage />
        </Switch>
        <Nav />
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  selectedDrink: state.selectedDrink,
  user: state.user
})

App.propTypes = {
  selectedDrink: PropTypes.object,
  user: PropTypes.object
}

export default connect(mapStateToProps)(App);
