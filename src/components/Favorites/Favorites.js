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
    let favorites = finalUser.favorites
    return(
      <div>
        {!favorites.length && <h1>You have no favorites</h1>}
        {favorites.length && favorites.map(drink => <MocktailCard drink={drink} key={drink.idDrink} />)}
      </div>
    )
  }
  return checkLocalStorage()
}

Favorites.propTypes = {
  props: PropTypes.object
}

export default Favorites
