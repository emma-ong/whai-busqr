import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import store from './store'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain={'https://busqr.au.auth0.com'}
      clientId={'ZdwSgHms6XudIrdhodIOAmb8refxsxSF'}
      redirectUri={window.location.origin}
      audience='https://busqr/api'
    >

    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>,
    </Auth0Provider>,
    document.getElementById('app')
  )
})
