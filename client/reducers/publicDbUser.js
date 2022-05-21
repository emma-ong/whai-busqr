import { GET_PUBLIC_USER } from '../actions'

function publicDbUser(state = {}, action) {
  switch (action.type) {
    case GET_PUBLIC_USER:
      return action.user

    default:
      return state
  }
}

export default publicDbUser
