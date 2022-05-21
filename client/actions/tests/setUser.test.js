import {SET_USER, setUser} from '../index'


describe('setUser()', () => {
  it('returns user', () => {
    const user = {
			auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
		}
		const expected = {
      type: SET_USER,
      user
    }
		
		const actual = setUser(user)
		expect(actual).toEqual(expected)
  })
})
