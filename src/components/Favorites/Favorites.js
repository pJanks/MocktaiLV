import React from 'react'
import MocktailCard from '../MocktailCard/MocktailCard'
import PropTypes from 'prop-types'
let favorites;

export const Favorites = (props) => {

  const checkLocalStorage = () => {
    let keys = Object.keys(localStorage)
    let user = keys.find(key => {
      return (JSON.parse(localStorage[key]).name === props.user.name)
    })
    let finalUser = JSON.parse(localStorage[user])
    favorites = finalUser.favorites
    if(!favorites) {
      return(
        <div>
          <h1>You have no favorites</h1>
        </div>
      )
    } else {
      return (
        <div>
          {favorites.map(drink => <MocktailCard drink={drink} key={drink.idDrink} />)}
        </div>
      )
    }
  }
  return checkLocalStorage()
}

Favorites.propTypes = {
  props: PropTypes.object
}

export default Favorites
