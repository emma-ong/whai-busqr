import { SET_URL } from '../actions'

const initialURL = {
url: '' //needs to change once deployed
}

export default function url (state = initialURL, action) {
  switch (action.type) {
    case SET_URL:
      return action.url
    
    default:
      return state
  }
}