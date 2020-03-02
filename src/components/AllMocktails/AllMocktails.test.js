import React from 'react';
import { AllMocktails, mapDispatchToProps } from './AllMocktails';
import { addDrinks } from '../../actions'
import { shallow } from 'enzyme'

describe('AllMocktails', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<AllMocktails />)
    instance = wrapper.instance()
  })

  it('should have a default state of an empty array', () => {
    expect(instance.state.allDrinks.length).toEqual(0)
  })

  it('should call fetchData when component mounts', () => {
    const fetchData = jest.fn()
    instance.componentDidMount = jest.fn().mockImplementation(() => fetchData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'))
    jest.spyOn(instance, 'componentDidMount')
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      });
    })
    instance.componentDidMount()
    expect(fetchData).toHaveBeenCalled()
    expect(fetchData).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    })



  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addDrinks action when addDrinksToStore is called', () => {
      const allDrinks =[{
            "strDrink": "Afterglow",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            "idDrink": "12560"
        },
        {
            "strDrink": "Alice Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            "idDrink": "12562"
        }]
        const mockDispatch = jest.fn();
        const actionToDispatch = addDrinks(allDrinks)
        const mappedProps = mapDispatchToProps(mockDispatch)

        mappedProps.addDrinksToStore(allDrinks)

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
