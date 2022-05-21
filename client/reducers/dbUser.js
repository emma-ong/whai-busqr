import { GET_USER } from '../actions'

function dbUser(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user

    default:
      return state
  }
}

export default dbUser
