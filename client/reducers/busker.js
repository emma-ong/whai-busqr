import { GET_BUSKER } from '../actions'

function busker(state = [], action) {
  switch (action.type) {
    case GET_BUSKER:
      return action.busker

    default:
      return state
  }
}

export default busker
