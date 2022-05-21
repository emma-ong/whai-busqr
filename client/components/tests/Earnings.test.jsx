import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Earnings from '../Earnings'

describe('<Earnings />', () => {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  let yyyy = today.getFullYear()

  today = dd + '/' + mm + '/' + yyyy
  it('renders present date', () => {
    render(
      <Router>
        <Earnings total={'500'} />
      </Router>
    )
    const date = screen.getByText(today)
    expect(date).toBeInTheDocument()
  })
})
