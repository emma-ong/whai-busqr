import React from 'react';
import QR from '../components/QR'
import { useDispatch } from 'react-redux'
import { setURL } from '../actions'

const QRCode = () => {
  const dispatch = useDispatch()
  const url = 'https://www.google.com/' // this needs to be dynamic, will create actions and reducers
  dispatch(setURL(url))
  return <>
  <QR />
  </>
}

export default QRCode