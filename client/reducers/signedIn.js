import { SIGNED_IN } from '../actions'

export default function signedIn(state = {}, action) {
  switch (action.type) {
    case SIGNED_IN:
      return action.user
    default:
      return state
  }
}
