import React, { Component } from 'react';
import DrinkDetails from '../DrinkDetails/DrinkDetails'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavoriteDrink } from '../../actions'
import { getDrink } from '../../actions'
import './MocktailCard.css';

let favoriteDrinks = []


export class MocktailCard extends Component {
  constructor() {
    super()
  }

handleFavoriteButtonClick = (drink) => {
    if (!this.props.user.userVerified) {
      window.alert('You must be logged in to do that');
    } else {
      favoriteDrinks.push(drink)
      this.props.addToUserFavorites(this.props.drink);
      localStorage.setItem(this.props.user.name, JSON.stringify({
        name: this.props.user.name,
        password: this.props.user.password,
        favorites: favoriteDrinks
      }))
    }
  }

  handleDetailsButtonClick = (drink) => {
    this.props.addDrinkToStore(drink)
  }


render() {
  return(
    <article>
      <h3>{this.props.drink.strDrink}</h3>
      <button onClick={() => this.handleFavoriteButtonClick(this.props.drink)}>Favorite</button>
      <button onClick={() => this.handleDetailsButtonClick(this.props.drink)} ><Link className='link' to={`/DrinkDetails${this.props.drink.idDrink}`}>Details</Link></button>
      <img src={this.props.drink.strDrinkThumb} alt='drink image' className='drink-image'/>
    </article>
  )}
}


export const mapDispatchToProps = (dispatch) => ({
  addToUserFavorites: (favoriteDrink) => { dispatch(addFavoriteDrink(favoriteDrink)) },
  addDrinkToStore: (drink) => { dispatch(getDrink(drink)) }
})

export const mapStateToProps = (state) => ({
  user: state.user
})

MocktailCard.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(MocktailCard);
