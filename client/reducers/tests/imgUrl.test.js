import imgUrl from '../imgUrl'
import {SET_IMG_URL} from '../../actions'

describe('imgUrl() reducer', () => {
  it('Sets the right image url', () => {
    const action = {
			type: SET_IMG_URL,
			url: 'www.test.com'
		}
		const state = ''
		const expected = 'www.test.com'
		
		const actual = imgUrl(state,action)
		expect(actual).toEqual(expected)
  })
})
