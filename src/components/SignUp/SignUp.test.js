import React from 'react';
import SignUp from './SignUp';
import { shallow } from 'enzyme'

describe('SignUp', () => {


  it('should match a snapshot as expected', () => {
    const wrapper = shallow(<SignUp />)

    expect(wrapper).toMatchSnapshot()
  })
})
