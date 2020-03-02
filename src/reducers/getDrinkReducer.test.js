import { getDrinkReducer } from './getDrinkReducer';

describe('getDrinkReducer', () => {

  it('should have an initial state of an empty object', () => {
    const expected = {}
    const result = getDrinkReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add drink to state', () => {
    const mockState= []
    const mockDrink = {
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        }
    const mockAction = {
      type: 'GET_DRINK',
      drink: mockDrink
    }
    const expected = {
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        }
    const result = getDrinkReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})
