import { SET_AUTH } from '../actions'

function authData(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.authData
    default:
      return state
  }
}
export default authData
