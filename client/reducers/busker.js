import { SET_BUSKER } from '../actions'

function busker(state = {}, action) {
  switch (action.type) {
    case SET_BUSKER:
      return action.busker
    default:
      return state
  }
}

export default busker
