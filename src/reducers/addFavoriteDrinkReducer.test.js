import { addFavoriteDrinkReducer } from './addFavoriteDrinkReducer';

describe('addFavoriteDrinkReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = addFavoriteDrinkReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add drinks to state', () => {
    const mockState = [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        }]
    const mockDrink = {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }
    const mockAction = {
      type: 'ADD_FAVORITE_DRINK',
      favoriteDrink: mockDrink
    }
    const expected = [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        }, {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
            }]
    const result = addFavoriteDrinkReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})
