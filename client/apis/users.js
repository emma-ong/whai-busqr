import request from 'superagent'

const rootUrl = '/api/v2'

export async function addUser(user) {
  return request
    .post(`${rootUrl}/users`)
    .send(user)
    .catch((err) => {
      return err
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

export function getUserByAuth(authToken) {
  return request.get(`api/v1/users/auth/${authToken}`).then((routeRes) => {
    return routeRes.body[0]
  })
}

export function getUserById(userId) {
  return request.get(`api/v1/users/id/${userId}`).then((routeRes) => {
    return routeRes.body[0]
  })
}
