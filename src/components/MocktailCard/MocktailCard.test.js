import React from 'react';
import { MocktailCard, mapDispatchToProps, mapStateToProps } from './MocktailCard';
import { shallow } from 'enzyme';
import { addFavoriteDrink, getDrink } from '../../actions';

describe('MocktailCard', () => {
  let wrapper, mockUser, instance;

  beforeEach(() => {
    wrapper = shallow(<MocktailCard drink={ {
      strDrink: "Afterglow",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
      idDrink: "12560"
    } } />)
    instance = wrapper.instance()
    mockUser = {
      name: 'Greg',
      userVerified: true
    }
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addFavoriteDrink action when addToUserFavorites is called', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = addFavoriteDrink(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addToUserFavorites(mockUser)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with the getDrink action when addDrinkToStore is called', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = getDrink(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addDrinkToStore(mockUser)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  // it('should track user input entry', () => {
  //   const mockUserEvent = { target: { name: 'user', value: 'user1' } };
  //   const mockPassEvent = { target: { name: 'password', value: 'passTest' } };
  //
  //   wrapper.instance().handleChange = jest.fn();
  //   wrapper.instance().forceUpdate();
  //   wrapper.find('[name="username"]').simulate('change', mockUserEvent);
  //   wrapper.find('[name="password"]').simulate('change', mockPassEvent);
  //
  //   expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockUserEvent);
  //   expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockPassEvent);
  // });
  //
  //
  // })
  });

  describe('mockStateToProps', () => {

    it('should return a user object', () => {
      const mockState = { user: mockUser }
      const expected = mockUser
      const mappedProps = mapStateToProps( mockState );
      expect(mappedProps.user).toEqual(expected)
    })
  })
});
