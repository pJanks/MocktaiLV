import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MocktailCard from '../MocktailCard/MocktailCard'
import { connect } from 'react-redux';
import { addDrinks } from '../../actions'
import { fetchData }  from '../../utils/helperFunctions'

export class OffTheWagon extends Component {
  constructor() {
    super()
    this.state = {
      allDrinks: []
    }
  }

  componentDidMount = async () => {
    try {
      let allDrinksData = await fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      await this.props.addDrinksToStore(allDrinksData.drinks)
      await this.setState({ allDrinks: allDrinksData.drinks })
    }
    catch(error) {
      console.log(error)
    }
  }

  render() {
    return(
      <section className='all-drinks'>
      <div>
      {this.state.allDrinks.map(drink => {
        return <MocktailCard drink={drink} key={drink.idDrink}/>
      })}
      </div>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addDrinksToStore: (allDrinksData) => { dispatch(addDrinks(allDrinksData)) }
})

export default connect(null, mapDispatchToProps)(OffTheWagon);
