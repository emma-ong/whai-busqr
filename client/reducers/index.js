import { combineReducers } from 'redux'
import imgUrl from './imgUrl'
import imgSize from './imgSize'
import authData from './authData'
import signedIn from './signedIn'
import busker from './busker'

export default combineReducers({
  imgUrl,
  imgSize,
  authData,
  signedIn,
  busker,
})
