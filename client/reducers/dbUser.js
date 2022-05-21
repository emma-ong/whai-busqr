import { GET_USER } from '../actions'

const emptyUser = {
  id: 0,
  auth: '',
  name: '',
  email: '',
  loaction: '',
  profile_pic: '',
  bio: '',
  payment_option_1: 1,
  payment_option_2: 2,
  payment_option_3: 3,
}

function dbUser(state = emptyUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user

    default:
      return state
  }
}

export default dbUser
