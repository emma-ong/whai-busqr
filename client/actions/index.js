import api from '../apis/'

export const GET_BUSKER = 'GET_BUSKER'
export const SET_ERROR = 'SET_ERROR'
export const SET_URL = 'SET_URL'
export const SET_IMG_URL = 'SET_IMG_URL'
export const SET_IMG_SIZE = 'SET_IMG_SIZE'
export const SET_USER = 'SET USER'
export const CLEAR_USER = 'CLEAR_USER'
export const SIGNED_IN = 'SIGNED_IN'
export const LOGOUT = 'LOGOUT'

export function setUser(user) {
  console.log(user)
  return {
    type: SET_USER,
    user
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER
  }
}

export function storeUserName(userName) {
  return {
    type: SIGNED_IN,
    userName
  }
} 

export function setURL(url) {
  return {
    type: SET_URL,
    url,
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

export function getBusker(busker) {
  return {
    type: GET_BUSKER,
    busker,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export function fetchBusker(buskerId) {
  return (dispatch) => {
    return api
      .getBuskerById(buskerId)
      .then((apiRes) => {
        dispatch(getBusker(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
