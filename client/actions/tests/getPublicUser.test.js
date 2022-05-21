import {GET_PUBLIC_USER, getPublicUser} from '../index'


describe('getPublicUser()', () => {
  it('returns correct error', () => {
    const user = {
			auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
		}

		const expected = {
      type: GET_PUBLIC_USER,
      user
    }
		
		const actual = getPublicUser(user)
		expect(actual).toEqual(expected)
  })
})
