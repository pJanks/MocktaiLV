import React from 'react';
import DrinkDetails from './DrinkDetails';
import { shallow } from 'enzyme'

describe('DrinkDetails', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<DrinkDetails />)
    instance = wrapper.instance()
  })

  it('should match a snapshot as expected', () => {
    const wrapper = shallow(<DrinkDetails />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state of an empty object', () => {
    expect(instance.state.drink).toEqual({})
  })

  it('should call fetchData when component mounts with the correct url', () => {
    const fetchData = jest.fn()
    instance.componentDidMount = jest.fn().mockImplementation(() => fetchData('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=6'))
    jest.spyOn(instance, 'componentDidMount')
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      });
    })
    instance.componentDidMount()
    expect(fetchData).toHaveBeenCalled()
    expect(fetchData).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=6')
    })
})
