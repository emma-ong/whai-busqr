import { SET_IMG_URL } from '../actions'

const initialURL = {
url: '' //needs to change once deployed
}

export default function imgUrl (state = initialURL, action) {
  switch (action.type) {
    case SET_IMG_URL:
      return action.url
    
    default:
      return state
  }
}