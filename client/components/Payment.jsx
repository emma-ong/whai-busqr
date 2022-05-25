import { CardElement } from "@stripe/react-stripe-js"
import React from "react"
 const Payment = () => {
   return (
     <form>
       <CardElement />
       <button>Pay</button>
     </form>
   )

 }

 export default Payment 