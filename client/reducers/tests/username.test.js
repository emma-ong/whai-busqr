import userState from '../username'
import {SIGNED_IN } from '../../actions'

describe('userState() reducer', () => {
  it('obtains user info as state', () => {
    const action = {
			type: SIGNED_IN ,
			userName: 'Bob'
		}
		const state = ''
		const expected = 'Bob'
		
		const actual = userState(state,action)
		
		expect(actual).toEqual(expected)
  })
})

