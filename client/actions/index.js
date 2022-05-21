import api from '../apis/'

export const SET_ERROR = 'SET_ERROR'
export const SET_IMG_URL = 'SET_IMG_URL'
export const SET_IMG_SIZE = 'SET_IMG_SIZE'
export const SIGNED_IN = 'SIGNED_IN'
export const SET_AUTH = 'SET_AUTH'
export const SET_BUSKER = 'SET_BUSKER'

export function setSignedIn(user) {
  return {
    type: SIGNED_IN,
    user,
  }
}

export function setAuth(authData) {
  return {
    type: SET_AUTH,
    authData,
  }
}

export function setBusker(busker) {
  return {
    type: SET_BUSKER,
    busker,
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

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export function fetchUserByAuth(auth0Id) {
  return (dispatch) => {
    return api
      .getUserByAuth(auth0Id)
      .then((apiRes) => {
        dispatch(setSignedIn(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function fetchBuskerById(buskerId) {
  return (dispatch) => {
    return api
      .getBuskerById(buskerId)
      .then((apiRes) => {
        dispatch(setBusker(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function addNewUser(newUser) {
  return (dispatch) => {
    return api
      .addUser(newUser)
      .then((user) => {
        dispatch(setSignedIn(user))
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
        dispatch(setSignedIn(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function addProfilePic(updatePic) {
  return (dispatch) => {
    return api.addPic(updatePic).catch((err) => {
      dispatch(setError(err.message))
    })
  }
}

export function payBusker(buskerId, paymentAmount) {
  return (dispatch) => {
    return api
      .payBusker(buskerId, paymentAmount)
      .then((apiRes) => {
        dispatch(setBusker(apiRes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
