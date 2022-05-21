import {SET_IMG_SIZE, setImgSize} from '../index'


describe('setImgSize()', () => {
  it('returns correct img size', () => {
    const size = 4

		const expected = {
      type: SET_IMG_SIZE,
      size
    }
		
		const actual = setImgSize(size)
		expect(actual).toEqual(expected)
  })
})
