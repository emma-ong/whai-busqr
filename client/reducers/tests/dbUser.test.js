import dbUser from '../dbUser'
import {GET_USER} from '../../actions'

describe ('dbUser() Reducer', () => {
  it('gets a user', () => {
    const action = {
      type: GET_USER,
      user: {name: 'Bob'}
    }
    const state = {}
    const expected = {name: 'Bob'}

    const actual = dbUser(state,action)
    expect(actual).toEqual(expected)
  })
})