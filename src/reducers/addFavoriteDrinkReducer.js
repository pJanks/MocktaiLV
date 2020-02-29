export const addFavoriteDrinkReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_FAVORITE_DRINK':
          return [...state, action.favoriteDrink]
      default:
          return state;
  }
}
