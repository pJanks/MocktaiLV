export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
      case 'ADD_USER':
          return action.user.name
      default:
          return state;
  }
}
