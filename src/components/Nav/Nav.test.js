import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme'

describe('Nav', () => {


  it('should match a snapshot as expected', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper).toMatchSnapshot()
  })
})
