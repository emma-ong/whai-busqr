import request from 'superagent'

const rootUrl = '/api/v2'

export async function addUser (user) {
  return request.post(`${rootUrl}/users`)
    .send(user)
    .catch(err => {
      return err
    })
}

export async function getUserName (auth0Id, token) {
  return request
  .get(`${rootUrl}/users/${auth0Id}`)
  .set('authorization', `Bearer ${token}`)

    .then(res => {
      return res.body.user
    })
    .catch(err => {
      return err
    })
}