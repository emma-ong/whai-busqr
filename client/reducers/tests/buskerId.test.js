import { SET_BUSKER_ID } from '../../actions'

import buskerId from '../buskerId'

describe('buskerId() reducer', () => {
  it('Sets the right id', () => {
    const action = {
			type: SET_BUSKER_ID ,
			id: '7'
		}
		const state = null
		const expected = '7'
		
		const actual = buskerId(state,action)
		
		expect(actual).toEqual(expected)
  })
})
