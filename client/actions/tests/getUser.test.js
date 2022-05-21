import {GET_USER, getUser} from '../index'


describe('getUser()', () => {
  it('returns correct user', () => {
    const user = {
			auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
		}

		const expected = {
      type: GET_USER,
      user
    }
		
		const actual = getUser(user)
		expect(actual).toEqual(expected)
  })
})
