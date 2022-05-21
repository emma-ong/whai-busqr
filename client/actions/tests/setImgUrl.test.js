import {SET_IMG_URL, setImgURL} from '../index'


describe('setImgURL()', () => {
  it('returns correct url', () => {
    const url = 'www.test.com'

		const expected = {
      type: SET_IMG_URL,
      url
    }
		
		const actual = setImgURL(url)
		expect(actual).toEqual(expected)
  })
})
