import { addUserReducer } from './addUserReducer';

describe('addUserReducer', () => {

  it('should have an initial state of an empty object', () => {
    const expected = {}
    const result = addUserReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to add a user to state', () => {
    const mockState = {}
    const mockUser = {
      name: 'Greg',
      userVerified: true
    }
    const mockAction = {
      type: 'ADD_USER',
      user: mockUser
    }
    const expected = {
      name: 'Greg',
      userVerified: true
    }
    const result = addUserReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})
