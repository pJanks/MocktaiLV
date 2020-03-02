import React from 'react';
import { Login, mapDispatchToProps } from './Login';
import { shallow } from 'enzyme';
import { addUser } from '../../actions';

describe('Login', () => {
  let wrapper, mockUser;

  beforeEach(() => {
    wrapper = shallow(<Login />)
    mockUser = {
      name: 'Greg',
      userVerified: true
    }
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should track user input entry', () => {
    const mockUserEvent = { target: { name: 'user', value: 'user1' } };
    const mockPassEvent = { target: { name: 'password', value: 'passTest' } };

    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('[name="username"]').simulate('change', mockUserEvent);
    wrapper.find('[name="password"]').simulate('change', mockPassEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockUserEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockPassEvent);
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addUser action when addUserToStore is called', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = addUser(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addUserToStore(mockUser)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});
