import {SET_AUTH, setAuth} from '../index'


describe('setAuth()', () => {
  it('returns authdata', () => {
    const authData = {
			auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
		}

		const expected = {
      type: SET_AUTH,
      authData
    }
		
		const actual = setAuth(authData)
		expect(actual).toEqual(expected)
  })
})
