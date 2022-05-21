import {CLEAR_USER, clearUser} from '../index'


describe('clearUser()', () => {
  it('returns correct type', () => {

		const expected = {
      type: CLEAR_USER,
    }
		
		const actual = clearUser()
		expect(actual).toEqual(expected)
  })
})
