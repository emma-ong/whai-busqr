import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserByAuth } from '../apis/users'


//to be deleted once database active
const user = {//needs to be pulled from db
  auth: 'auth0|somethingFrank',
  total: 5
}

function BuskerHome() {
  //need to get merged database to access busker info, for now have hardcoded
  const [busker, setBusker] = useState({})
  useEffect(() => {
    getUserByAuth(user.auth) 
    .then(res => {
    console.log(res)

      setBusker(res)
    })
    .catch(err => console.log(err))
  }, [])
  
  return <>
    <h1>{busker !== null ? busker.name : null}</h1>
    <img src={busker !== null ? busker.profile_pic : null} alt="busker img" />
    <ul>
      <li><Link to={"/qrcode"}>QR Code</Link></li>
      <li><Link to={"/updateDetails"}>Update Details</Link></li>
    </ul>
    <p>Total Earned: ${user.total}</p>
  </>
}


export default BuskerHome