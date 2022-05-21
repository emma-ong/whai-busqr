import { SET_BUSKER_ID } from '../actions'

const initialURL = {
url: null //needs to change once deployed
}

export default function buskerId (state = initialURL, action) {
  switch (action.type) {
    case SET_BUSKER_ID:
      return action.id
    
    default:
      return state
  }
}