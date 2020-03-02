export const getDrinkReducer = (state = {}, action) => {
  switch (action.type) {
      case 'GET_DRINK':
      console.log(action.drink);
          return state = action.drink
      default:
          return state;
  }
}
