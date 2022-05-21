import { combineReducers } from 'redux'
import url from './url'
import imgUrl from './imgUrl'
import imgSize from './imgSize'
import dbUser from './dbUser'
import user from './users'
import userState from './username'

// import stuff from './stuff'

export default combineReducers({
  // stuff
  url,
  imgUrl,
  imgSize,
  dbUser,
  user,
  userState,
})
