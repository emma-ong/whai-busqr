import {SET_BUSKER, setBusker} from '../index'


describe('setBusker()', () => {
  it('returns busker info', () => {
    const busker = {
      id: 8,
      name: 'Guy Incognito',
      profile_pic:
        'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      payment_option_1: 10,
      payment_option_2: 20,
      payment_option_3: 50,
		}

		const expected = {
      type: SET_BUSKER,
      busker
    }
		
		const actual = setBusker(busker)
		expect(actual).toEqual(expected)
  })
})
