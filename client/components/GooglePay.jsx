import React from "react";
import GooglePayButton from "@google-pay/button-react";
// import "./style.css";

export default function GooglePay() {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  // const isTop = window === window.top;

  return (
    <div>

      <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor='white'
          buttonType='donate'
          // buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
      {/* style={{ display: isTop ? "none" : "" }} */}
      <div className="note" > 
      </div>
    </div>
  );
}
