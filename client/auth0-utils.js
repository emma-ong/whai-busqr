import { setUser } from './actions'
import store from './store'

export async function cacheUser (useAuth0, state) {
    const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()
    getAccessTokenSilently(user)
      .then(token => {
        console.log(user)
        if (isAuthenticated && !state?.token) {
          try {
            const userToSave = {
              auth0Id: user.sub,
              email: user.email,
              given_name: user.given_name,
              token: token,
              picture: user.picture
            }
            store.dispatch(setUser(userToSave))
          } catch (err) {
            console.log('hello')
            console.error(err)
          }
        }
        return null
      })
      .catch((err) => {
        console.log('hello')
        console.log(err.message)
      })
  }