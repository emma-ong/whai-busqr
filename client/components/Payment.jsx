import React from "react"
import {useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';


 const Payment = (props) => {
  const busker = useSelector((state) => state.busker)
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
    label= {`Give $${props.value}`}
    token={onToken}
    stripeKey={process.env.STRIPE_PUBLISHABLE_TEST_KEY}
    name= 'busqr'// the pop-in header title
    description={`Thank you for supporting ${busker.name}`}// the pop-in header subtitle
    amount={busker.payment_option_1 * 100}
    currency="NZD"
    billingAddress={true}
    zipCode={true}
    allowRememberMe
    />

   )

 }

 export default Payment 