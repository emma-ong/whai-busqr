import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from '../Nav'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

jest.mock('@auth0/auth0-react')

const fakeUser = {
    name: 'James'
}

describe('<Nav /> renders when user is authenticated', () => {
    it('should render login message', () => {
      useAuth0.mockReturnValue({
        isAuthenticated: true,
        user: {
          ...fakeUser,
        },
        logout: jest.fn(),
      })
  
      render(
        <Router>
          <Nav />
        </Router>
      )
      const loginMessage = screen.getByLabelText('login message')
      expect(loginMessage).toHaveTextContent('Signed in as James')
    })
    it('should render a sign-out option that calls the logout function when clicked', async () => {
      render(
        <Router>
          <Nav />
        </Router>
      )
      const logOffMessage = screen.getByLabelText('logout')
      expect(logOffMessage).toHaveTextContent('Log off')
  
      await userEvent.click(button)
  
      expect(useAuth0().logout).toHaveBeenCalled()
    })
  })
  
  describe('<Login /> renders when user is not authenticated', () => {
    it('renders a sign-in button that calls the login function when clicked', async () => {
      useAuth0.mockReturnValue({
        isAuthenticated: false,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      })
      render(
        <Router>
          <Login />
        </Router>
      )
      const button = screen.getByRole('button', { name: /sign in/i })
      expect(button).toBeInTheDocument()
  
      await userEvent.click(button)
  
      expect(useAuth0().loginWithRedirect).toHaveBeenCalled()
    })
  })