import { setAuth, fetchUserByAuth } from './actions'
import store from './store'

export async function cacheUser(useAuth0, state) {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()
  getAccessTokenSilently(user)
    .then((token) => {
      if (isAuthenticated && !state?.token) {
        try {
          const authData = {
            auth0Id: user.sub,
            email: user.email,
            given_name: user.given_name,
            token: token,
          }
          store.dispatch(setAuth(authData))
          store.dispatch(fetchUserByAuth(authData?.auth0Id))
        } catch (err) {
          console.error(err)
        }
      }
      return null
    })
    .catch((err) => {
      console.log(err.message)
    })
}
