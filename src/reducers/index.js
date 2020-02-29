import { getDrinksReducer } from './getDrinksReducer';
import { addUserReducer } from './addUserReducer';
import { getDrinkReducer } from './getDrinkReducer';
import { addFavoriteDrinkReducer } from './addFavoriteDrinkReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: addUserReducer,
    drinks: getDrinksReducer,
    favoriteDrinks: addFavoriteDrinkReducer,
    selectedDrink: getDrinkReducer,
})

export default rootReducer;
