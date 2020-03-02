import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/helperFunctions'
import './DrinkDetails.css'


export class DrinkDetails extends Component {
  constructor() {
    super()
    this.state = {
      drink: {}
    }
  }

  componentDidMount = async () => {
    try {
      if (!this.state.drink.drinks) {
        let drinkData = await fetchData(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.drink.idDrink}`)
        await this.setState({ drink: drinkData })
      }
      else return
    }
    catch(error) {
      console.log(error)
    }
  }

  render() {
    if (!this.state.drink.drinks) {
      return <h1>Loading . . .</h1>
    } else {
      return (
        <section>
        <div>
          <h2>{this.state.drink.drinks[0].strDrink}</h2>
          <img src={this.props.drink.strDrinkThumb} alt='image of beverage' className='drink-image'/>
          <h3>Glass: {this.state.drink.drinks[0].strGlass}</h3>
          {this.state.drink.drinks[0].strMeasure1 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure1} {this.state.drink.drinks[0].strIngredient1}</h3>}
          {this.state.drink.drinks[0].strMeasure2 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure2} {this.state.drink.drinks[0].strIngredient2}</h3>}
          {this.state.drink.drinks[0].strMeasure3 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure3} {this.state.drink.drinks[0].strIngredient3}</h3>}
          {this.state.drink.drinks[0].strMeasure4 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure4} {this.state.drink.drinks[0].strIngredient4}</h3>}
          {this.state.drink.drinks[0].strMeasure5 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure5} {this.state.drink.drinks[0].strIngredient5}</h3>}
          {this.state.drink.drinks[0].strMeasure6 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure6} {this.state.drink.drinks[0].strIngredient6}</h3>}
          {this.state.drink.drinks[0].strMeasure7 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure7} {this.state.drink.drinks[0].strIngredient7}</h3>}
          {this.state.drink.drinks[0].strMeasure8 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure8} {this.state.drink.drinks[0].strIngredient8}</h3>}
          {this.state.drink.drinks[0].strMeasure9 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure9} {this.state.drink.drinks[0].strIngredient9}</h3>}
          {this.state.drink.drinks[0].strMeasure10 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure10} {this.state.drink.drinks[0].strIngredient10}</h3>}
          {this.state.drink.drinks[0].strMeasure11 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure11} {this.state.drink.drinks[0].strIngredient11}</h3>}
          {this.state.drink.drinks[0].strMeasure12 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure12} {this.state.drink.drinks[0].strIngredient12}</h3>}
          {this.state.drink.drinks[0].strMeasure13 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure13} {this.state.drink.drinks[0].strIngredient13}</h3>}
          {this.state.drink.drinks[0].strMeasure14 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure14} {this.state.drink.drinks[0].strIngredient14}</h3>}
          {this.state.drink.drinks[0].strMeasure15 && <h3>Ingredients and Amount: {this.state.drink.drinks[0].strMeasure15} {this.state.drink.drinks[0].strIngredient15}</h3>}
          <h3>Instructions: {this.state.drink.drinks[0].strInstructions}</h3>
          </div>
        </section>
      )
    }
  }
}

export default DrinkDetails
