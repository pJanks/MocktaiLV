import { getNonalcoholicDrinksReducer } from './getNonalcoholicDrinksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    nonalcoholicDrinks: getNonalcoholicDrinksReducer,
})

export default rootReducer;
