import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import store from './store'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js' //loads script tag, inits stripe obj asynchronously 
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_bxJuE0fpBxauHmThIvNnWtDt')

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Auth0Provider
        domain={'whai-busqr.au.auth0.com'}
        clientId={'dcK8w6hHEmQhrtRuBQGByZAWps1XHKDD'}
        redirectUri={window.location.origin}
        audience='https://whai-busqr/api'
        cacheLocation="localstorage"
      >

      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter> 
            <Elements stripe={stripePromise}> 
              <App />
            </Elements>
          </BrowserRouter>
        </ChakraProvider>
      </Provider>,
      </Auth0Provider>,
      document.getElementById('app')
    )
  })



