import { combineReducers } from 'redux'
import url from './buskerId'
import imgUrl from './imgUrl'
import imgSize from './imgSize'
import dbUser from './dbUser'
import user from './users'
import userState from './username'
import publicDbUser from './publicDbUser'
import buskerId from './buskerId'

// import stuff from './stuff'

export default combineReducers({
  // stuff
  buskerId,
  imgUrl,
  imgSize,
  dbUser,
  user,
  userState,
  publicDbUser
})
