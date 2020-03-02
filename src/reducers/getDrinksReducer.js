export const getDrinksReducer = (state = [], action) => {
  switch (action.type) {
      case 'LOAD_DRINKS':
          return [...state, action.drinks]
      default:
          return state;
  }
}
