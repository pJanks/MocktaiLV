import * as actions from '../actions'


describe('actions', () => {
  it('should have a type of ADD_USER', () => {
    const mockUser = {
      name: 'Greg',
      userVerified: true
    }
    const result = actions.addUser(mockUser)
    const expectedAction = {
      type: 'ADD_USER',
      user: mockUser
    }
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_DRINKS', () => {
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
    const result = actions.addDrinks(mockDrinks)
    const expectedAction = {
      type: 'LOAD_DRINKS',
      drinks: mockDrinks
    }
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE_DRINK', () => {
    const mockFavoriteDrink = {
        "strDrink": "Alice Cocktail",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        "idDrink": "12562"
    }
    const result = actions.addFavoriteDrink(mockFavoriteDrink)
    const expectedAction = {
      type: 'ADD_FAVORITE_DRINK',
      favoriteDrink: mockFavoriteDrink
    }
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_DRINK', () => {
    const mockDrink = {
        "strDrink": "Alice Cocktail",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        "idDrink": "12562"
    }
    const result = actions.getDrink(mockDrink)
    const expectedAction = {
      type: 'GET_DRINK',
      drink: mockDrink
    }
    expect(result).toEqual(expectedAction);
  });
});
