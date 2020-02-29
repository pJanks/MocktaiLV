import React, { Component } from 'react';
import DrinkDetails from '../DrinkDetails/DrinkDetails'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavoriteDrink } from '../../actions'
import { getDrink } from '../../actions'




export class MocktailCard extends Component {
  constructor() {
    super()
  }

handleFavoriteButtonClick = () => {
  console.log(this.props);
    if (!this.props.user.userVerified) {
      window.alert('You must be logged in to do that');
    } else {
      console.log(this.props);
      this.props.addToUserFavorites(this.props.drink);
    }
  }

  handleDetailsButtonClick = (drink) => {
    this.props.addDrinkToStore(drink)
  }

render() {
  return(
    <article>
      <h3>{this.props.drink.strDrink}</h3>
      <button onClick={this.handleFavoriteButtonClick}><Link to={this.props.user.userVerified ? `/DrinkDetails${this.props.drink.idDrink}` : '/'}>Favorite</Link></button>
      <button onClick={() => this.handleDetailsButtonClick(this.props.drink)} ><Link to={`/DrinkDetails${this.props.drink.idDrink}`}>Details</Link></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MocktailCard);
