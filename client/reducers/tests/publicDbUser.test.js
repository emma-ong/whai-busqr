import publicDbUser from '../publicDbUser'
import {GET_PUBLIC_USER} from '../../actions'

describe('publicDbUser() reducer', () => {
  it('obtains user info as state', () => {
    const action = {
			type: GET_PUBLIC_USER,
			user: {name: 'Bob', email: 'bob@bob.com'}
		}
		const state = {}
		const expected = {name: 'Bob', email: 'bob@bob.com'}
		
		const actual = publicDbUser(state,action)
		
		expect(actual).toEqual(expected)
  })
})

