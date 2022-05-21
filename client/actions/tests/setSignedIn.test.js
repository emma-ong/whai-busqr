import {SIGNED_IN, setSignedIn} from '../index'


describe('setSignedIn', () => {
  it('sets signed user correctly', () => {
    const user = {
			auth0Id: '123',
      email: 'bob@bob.com',
      given_name: '',
      token: '000'
		}

		const expected = {
      type: SIGNED_IN,
      user
    }
		
		const actual = setSignedIn(user)
		expect(actual).toEqual(expected)
  })
})
