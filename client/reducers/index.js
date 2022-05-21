import { combineReducers } from 'redux'
import imgUrl from './imgUrl'
import imgSize from './imgSize'
import dbUser from './dbUser'
import user from './users'
import userState from './username'
import publicDbUser from './publicDbUser'
import buskerId from './buskerId'


export default combineReducers({
  buskerId,
  imgUrl,
  imgSize,
  dbUser,
  user,
  userState,
  publicDbUser
})
