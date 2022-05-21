import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useDispatch } from 'react-redux'
import DownloadButton from './DownloadButton'
import { setImgURL } from '../actions'
//card.options[card.selectedIndex].text

const QR = () => {
  //retrieves url from App.jsx
  const dispatch = useDispatch()
  // const url = useSelector( state => state.url)
  // const user = useSelector( state => state.user)
  const [src, setSrc] = useState(null)
  const [size, setSize] = useState(null)
  // console.log(user)

  function getImgUrl(size) {
    QRCode.toDataURL('http://localhost:3000', { version: size }) //needs to be deployed
      .then(setSrc)
      .catch((err) => console.log(err))
  }

  function handleChange(e) {
    setSize(e.target.value)
  }

  useEffect(() => {
    getImgUrl(size)
  })

  useEffect(() => {
    if (src !== null) {
      dispatch(setImgURL(src))
    }
  })

  // console.log(src)

  return (
    <>
      <div>
        <div>
          <h1>Here is your uniquely generated QR Code!</h1>
        </div>
        <img className="qr-code" src={src} />
        <select onChange={handleChange} name="size" id="size">
          <option value={5}>Small</option>
          <option value={15}>Medium</option>
          <option value={25}>Large</option>
          <option value={40}>Extra-large</option>
        </select>
        <DownloadButton />
      </div>
    </>
  )
}

export default QR
