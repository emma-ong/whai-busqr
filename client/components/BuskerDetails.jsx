import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByAuth } from '../actions'

function BuskerDetails() {
  
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const dbUser = useSelector((state) => state.dbUser)

  useEffect(() => {
      dispatch(fetchUserByAuth(user.auth0Id))
  }, [user,dbUser])

  
  
  return <>
    <h1>{dbUser !== null ? dbUser.name : null}</h1>
    <img src={dbUser !== null ? dbUser.profile_pic : null} alt="busker img" />
    <p>{dbUser !== null ? dbUser.bio : null}</p>
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