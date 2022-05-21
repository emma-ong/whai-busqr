import {SET_BUSKER_ID, setBuskerId} from '../index'


describe('setBuskerId()', () => {
  it('returns correct buskerId', () => {
    const id = '99'

		const expected = {
      type: SET_BUSKER_ID,
      id
    }
		
		const actual = setBuskerId(id)
		expect(actual).toEqual(expected)
  })
})
