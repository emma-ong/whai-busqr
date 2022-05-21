import request from 'superagent'

export function getBuskerById(buskerId) {
  return request.get(`api/v1/busker/${buskerId}`).then((routeRes) => {
    return routeRes.body
  })
}
