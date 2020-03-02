import React from 'react';
import { App, mapStateToProps } from './App';
import { addDrinks } from '../../actions'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App selectedDrink={ {
      strDrink: "Afterglow",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
      idDrink: "12560"
    } } />)
    instance = wrapper.instance()
  })

  it('should match a snapshot as expected', () => {  
    expect(wrapper).toMatchSnapshot()
  })

  describe('mockStateToProps', () => {

    it('should return a selectedDrink object', () => {
      const mockState = { selectedDrink: {
        strDrink: "Afterglow",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        idDrink: "12560"
      } }
      const expected = {
        strDrink: "Afterglow",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        idDrink: "12560"
      }
      const mappedProps = mapStateToProps( mockState );
      expect(mappedProps.selectedDrink).toEqual(expected)
    })
  })
})
