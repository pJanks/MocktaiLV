export const addUser = (user) => ({
  type: 'ADD_USER',
  user
})

export const addDrinks = (drinks) => ({
  type: 'LOAD_NONALCOHOLIC_DRINKS',
  drinks
})

export const addFavoriteDrink = (favoriteDrink) => ({
  type: 'ADD_FAVORITE_DRINK',
  favoriteDrink
})

export const getDrink = (drink) => ({
  type: 'GET_DRINK',
  drink
})
