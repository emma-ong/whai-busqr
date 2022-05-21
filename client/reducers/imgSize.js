import { SET_IMG_SIZE } from '../actions'

const initialSize = {
size: '' //needs to change once deployed
}

export default function ImgSize (state = initialSize, action) {
  switch (action.type) {
    case SET_IMG_SIZE :
      return action.size
    
    default:
      return state
  }
}