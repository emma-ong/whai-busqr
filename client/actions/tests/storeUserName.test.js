import {SIGNED_IN, storeUserName} from '../index'


describe('storeUserName()', () => {
  it('returns correct userName', () => {
    const userName = 'Bob'

		const expected = {
      type: SIGNED_IN,
      userName
    }

		
		const actual = storeUserName(userName)
		expect(actual).toEqual(expected)
  })
})
