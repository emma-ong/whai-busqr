import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ModalPersonal from '../ModalPersonal'

describe('ModalPersonal', () => {
  it('renders modal', async () => {
    render(
      <Router>
        <ModalPersonal />
      </Router>
    )
    const buttonsBeforeOpen = screen.getAllByRole('button')
    await fireEvent.click(buttonsBeforeOpen[0])
    expect(buttonsBeforeOpen).toHaveLength(1)
    const buttonsAfterOpen = screen.getAllByRole('button')
    const headings = screen.getAllByRole('heading', 'h2')
    expect(buttonsAfterOpen).toHaveLength(2)
    expect(headings).toHaveLength(3)
    expect(headings[0]).toHaveTextContent('Biography')
  })
})
