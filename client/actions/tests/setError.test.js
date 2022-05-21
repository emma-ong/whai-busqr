import {SET_ERROR, setError} from '../index'


describe('setError()', () => {
  it('returns correct error', () => {
    const errMessage = 'This is an error'

		const expected = {
      type: SET_ERROR,
      errMessage
    }
		
		const actual = setError(errMessage)
		expect(actual).toEqual(expected)
  })
})
