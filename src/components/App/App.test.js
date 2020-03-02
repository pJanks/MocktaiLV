import React from 'react';
import { App, mapStateToProps } from './App';
import { addDrinks } from '../../actions'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })



  describe('mapStateToProps', () => {
    it('should be able to update state', () => {
      let mockState = {
        allDrinks: [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        },
        {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }]
      }

      const expected = {
        allDrinks: [{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        },
        {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }]
      }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })
})
