import { GET_BUSKER, fetchBusker, SET_ERROR } from '../index'
import api from '../../apis'

const fakeBusker = {
  id: 8,
  name: 'Guy Incognito',
  profile_pic:
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  payment_option_1: 10,
  payment_option_2: 20,
  payment_option_3: 50,
}

jest.mock('../../apis')

const fakeDispatch = jest.fn()

api.getBuskerById.mockReturnValue(Promise.resolve(fakeBusker))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.log.mockRestore()
})

describe('fetchBusker', () => {
  it('calls an api and dispatches the result', () => {
    expect.assertions(1)
    return fetchBusker()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: GET_BUSKER,
        busker: fakeBusker,
      })
    })
  })
  it('should return an error when api returns a rejected promise', () => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    api.getBuskerById.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return fetchBusker()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ERROR,
        errMessage: 'Something went wrong',
      })
    })
  })
})
