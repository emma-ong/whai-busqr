import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import QRCode from 'qrcode'
import QR from '../QR'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import store from '../../store'

afterEach(() => jest.clearAllMocks())

jest.mock('qrcode')

const encoded = 'data:image/png;base64,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'

describe('QR', () => {
  it('renders correct text elements', async () => {
    QRCode.toDataURL.mockReturnValue(Promise.resolve(encoded))
    act(() => {render(<Provider store={store}><Router><QR/></Router></Provider>)})
    const heading = screen.getByRole('heading', 'h2')
    const options = screen.getAllByRole('option')
    expect.assertions(3)
    await waitFor(() => {expect(heading).toHaveTextContent('QR')})
    await waitFor(() => {expect(options).toHaveLength(5)})
    await waitFor(() => {expect(options[0]).toHaveTextContent('Select distance')})
  })

  it('renders image on screen', async () => {
    QRCode.toDataURL.mockReturnValue(Promise.resolve(encoded))
    act(() => {render(<Provider store={store}><Router><QR/></Router></Provider>)})
    await waitFor(() => QRCode.toDataURL)
    expect.assertions(1)
    const imgElement = screen.getByRole('img')
    await waitFor(() => {expect(imgElement.src).toBe(encoded)})
  })

  it('throws an error if url is not correct', async () => {
    QRCode.toDataURL.mockImplementation(() => Promise.reject(new Error('ohNo'))
    )
      expect.assertions(2)
      console.log = jest.fn()
      act(() => {render(<Provider store={store}><Router><QR/></Router></Provider>)})
      await waitFor(() => QRCode.toDataURL)
      // const imgElement = screen.getByRole('img')
      await waitFor(() => {expect(console.log).toHaveBeenCalled()})
      await waitFor(() => {expect(console.log).toHaveBeenCalledWith(Error('ohNo'))})
  })

  it('selects the right option properly', async () => {
    QRCode.toDataURL.mockReturnValue(Promise.resolve(encoded))
    expect.assertions(1)
    act(() => {render(<Provider store={store}><Router><QR/></Router></Provider>)})
      await waitFor(() => QRCode.toDataURL)
      const selectSizeElement = screen.getByRole('combobox')
      const option = screen.getByRole('option', {name: 'Select distance'})
      act(() => {userEvent.selectOptions(
          // Find the select element
          selectSizeElement,
          // Find and select the size option
          option
        )
        
      })
      await waitFor(() => {expect(option.selected).toBe(true)})
  })
})






