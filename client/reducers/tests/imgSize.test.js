import imgSize from '../imgSize'
import {SET_IMG_SIZE} from '../../actions'

describe('imgSize() reducer', () => {
  it('Sets the right image size', () => {
    const action = {
			type: SET_IMG_SIZE,
			size: '5'
		}
		const state = ''
		const expected = '5'
		
		const actual = imgSize(state,action)
		
		expect(actual).toEqual(expected)
  })
})
