import { getDrinksReducer } from './getDrinksReducer';

describe('getDrinksReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = getDrinksReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add drinks to state', () => {
    const mockDrinks = [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        },
        {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }]
    const mockAction = {
      type: 'GET_DRINKS',
      drinks: mockDrinks
    }
    const expected = [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        },
        {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }]
    const result = getDrinksReducer(mockDrinks, mockAction)
    console.log(result);
    expect(result).toEqual(expected)
  })
})
