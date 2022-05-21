import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated } from './Authenticated'
import { cacheUser } from '../auth0-utils'

function Nav () {
    // cacheUser(useAuth0)
  const { logout } = useAuth0()
  // user state from reducer has Auth0Id & email
  const userName = useSelector((state) => state.user.given_name)

  const handleLogoff = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <IfAuthenticated>
         <p aria-label='logout'><a href="/" onClick={handleLogoff}>Log off</a></p> 
          <p aria-label='login message'>Signed in as {userName}</p>
        </IfAuthenticated>
      </nav>
    </>
  )
}

export default Nav