import React from "react"
// import { CardElement } from "@stripe/react-stripe-js"
import StripeCheckout from 'react-stripe-checkout';

 const Payment = () => {
  const onToken = (token) => {
    return fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
        return response.json()
        })
      .then(data => {
        alert(`We are in business, ${data.email}`)
      })
      .catch(err => console.log(err))
  }

   return (
    <StripeCheckout
    token={onToken}
    stripeKey={process.env.STRIPE_PUBLISHABLE_TEST_KEY}
  />
   )

 }

 export default Payment 