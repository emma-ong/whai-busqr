import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from '../Nav'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import userEvent from '@testing-library/user-event'
import Signin from '../../pages/Signin'
history
beforeEach(() => { jest.clearAllMocks(); })
jest.mock('react-redux')
jest.mock('@auth0/auth0-react')

const fakeStore = {
  getState: jest.fn()
}
const user = {
  sub: 'auth0|6269e6541203ad006af37b1d',
  email: 'frank@theclown.com',
  given_name: 'frank',
  token: '111'
}

// describe('<Nav /> renders when user is authenticated', () => {
//   useAuth0.mockReturnValue({
//     getAccessTokenSilently: jest.fn(() => Promise.resolve(user)),
//     loginWithRedirect: jest.fn(),
//     isAuthenticated: true,
//     user: {
//       ...user,
//     },
//     logout: jest.fn(),
//   })
//   useSelector.mockReturnValue(() => user)
//   it('should render login message', () => {
//       render(
//         <Router><Nav /></Router>)
//         screen.debug()
//         console.log(screen.getAllByRole(''))
//       // const loginMessage = screen.getByLabelText('login message')
//       // expect(loginMessage.innerHTML).toBe('Signed in as frank')
//     })
//     // it('should render a sign-out option that calls the logout function when clicked', async () => {
//     //   render(
//     //     <Router>
//     //       <Nav />
//     //     </Router>
//     //   )
//     //   const logOutMessage = screen.getByLabelText('logout')
//     //   expect(logOutMessage.innerHTML).toContain('Log off')
  
  
//     //   await userEvent.click(screen.getByText('Log off'))
  
//     //   expect(useAuth0().logout).toHaveBeenCalled()
//     // })
    
//   })

  describe('<Signin /> renders when user is not authenticated', () => {
    it('renders a sign-in button that calls the login function when clicked', async () => {
      useAuth0.mockReturnValue({
        isAuthenticated: false,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      })

      render(
        <Router>
          <Signin />
        </Router>
      )
      
      const button = screen.getByRole('button', { name: /login/i })
      await userEvent.click(button)
      expect(useAuth0().loginWithRedirect).toHaveBeenCalled()
    })
  })

