import React, { useEffect, useState } from 'react'
import { getUserByAuth } from '../apis/users'


//to be deleted once database active
const user = {//needs to be pulled from db
  auth: 'auth0|somethingFrank',
  total: 5
}

function BuskerDetails() {
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
    <p>{busker !== null ? busker.bio : null}</p>
    <form>
      <label htmlFor="">Current Image</label>
      <input type="text" />
      <label htmlFor="">Name</label>
      <input type="text" />
      <label htmlFor="">Location</label>
      <input type="text" />
      <label htmlFor="">Description</label>
      <input type="text" />
      <label htmlFor="">Payment Amounts</label>
      <input type="text" />
    </form>
  </>
}


export default BuskerDetails