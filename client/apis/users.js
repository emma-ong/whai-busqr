import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function addUser(user) {
  return request
    .post(rootUrl)
    .send(user)
    .then((routeRes) => {
      return routeRes.body
    })
    .catch((err) => {
      return err
    })
}

export async function addPic(profilePic) {
  return request
    .post(`${rootUrl}/profilepic`)
    .attach('profile-pic', profilePic)
    .then((res) => {
      console.log(res)
      return res
    })
}

export async function getUserName(auth0Id, token) {
  return request
    .get(`${rootUrl}/users/${auth0Id}`)
    .set('authorization', `Bearer ${token}`)

    .then((res) => {
      return res.body.user
    })
    .catch((err) => {
      return err
    })
}

export function getUserByAuth(auth0Id) {
  return request.get(`${rootUrl}/auth/${auth0Id}`).then((routeRes) => {
    return routeRes.body
  })
}

export function getBuskerById(buskerId) {
  return request.get(`${rootUrl}/id/${buskerId}`).then((routeRes) => {
    return routeRes.body
  })
}

export function updateUser(updateData) {
  return request
    .post(`${rootUrl}/update`)
    .send(updateData)
    .then((routeRes) => {
      return routeRes.body
    })
}
