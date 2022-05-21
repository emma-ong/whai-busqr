import user from '../users'
import { SET_USER, CLEAR_USER } from '../../actions'

describe('user() reducer', () => {
  it('sets user', () => {
    const action = {
			type: SET_USER ,
			user: {
        auth0Id: '123',
        email: 'bob@bob.com',
        given_name: '',
        token: '000'
      }
		}
		const state = {}
		const expected = {
      auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
    }
		
		const actual = user(state,action)
		expect(actual).toEqual(expected)
  })

  it('clears user', () => {
    const action = {
			type: CLEAR_USER,
		}
		const state = {}
		const expected = {
      auth0Id: "",
      email: "",
      given_name: "",
      token: "",
    }
		
		const actual = user(state,action)
		expect(actual).toEqual(expected)
  })



})

