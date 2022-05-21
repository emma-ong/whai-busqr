import api from '../apis/'
import { addUser } from '../apis/users'

export const GET_USER = 'GET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SET_BUSKER_ID = 'SET_BUSKER_ID'
export const SET_IMG_URL = 'SET_IMG_URL'
export const SET_IMG_SIZE = 'SET_IMG_SIZE'
export const SET_USER = 'SET USER'
export const CLEAR_USER = 'CLEAR_USER'
export const SIGNED_IN = 'SIGNED_IN'
export const LOGOUT = 'LOGOUT'
export const GET_PUBLIC_USER = 'GET_PUBLIC_USER'

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function storeUserName(userName) {
  return {
    type: SIGNED_IN,
    userName,
  }
}

export function setBuskerId(id) {
  return {
    type: SET_BUSKER_ID,
    id,
  }
}

export function setImgURL(url) {
  return {
    type: SET_IMG_URL,
    url,
  }
}

export function setImgSize(size) {
  return {
    type: SET_IMG_SIZE,
    size,
  }
}

export function getUser(user) {
  return {
    type: GET_USER,
    user,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export function fetchUserByAuth(authToken) {
  return (dispatch) => {
    return api
      .getUserByAuth(authToken)
      .then((apiRes) => {
        dispatch(getUser(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function fetchUserById(userId) {
  return (dispatch) => {
    return api
      .getUserById(userId)
      .then((apiRes) => {
        dispatch(getUser(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function getPublicUser(user) {
  return {
    type: GET_PUBLIC_USER,
    user,
  }
}

export function fetchPublicUserById(userId) {
  return (dispatch) => {
    return api
      .getUserById(userId)
      .then((apiRes) => {
        dispatch(getPublicUser(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function addNewUser(newUser) {
  return (dispatch) => {
    return addUser(newUser)
      .then((user) => {
        dispatch(setUser(user))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function updateUser(updateData) {
  return (dispatch) => {
    return api
      .updateUser(updateData)
      .then((apiRes) => {
        dispatch(getUser(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
