import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useDispatch } from 'react-redux'
import DownloadButton from './DownloadButton'
import { setImgURL } from '../actions'

const QR = () => {
  const dispatch = useDispatch()
  const [src, setSrc] = useState(null)
  const [size, setSize] = useState(null)
  // const buskerId = useEffect(state => state.buskerId)
  // console.log(buskerId)

  function getImgUrl(size) {
    // once buskerId set via registration page, to use this url for testing: http://localhost:3000/paybusker/${buskerId}
    // Scale ratio is 8:3cm
    QRCode.toDataURL(`http://localhost:3000/paybusker/1`, { scale: size })
      .then(setSrc)
      // TODO: how does the user experience this
      .catch((err) => console.log(err))
  }

  function handleChange(e) {
    let distance = e.target.value
    let qrSize = (distance / 10) * (8 / 3)
    setSize(qrSize)
  }

  // TODO: did you intend to do this on every render? perhaps you should be using `[]` as your dependencies array
  useEffect(() => {
    getImgUrl(size)
  })

  // TODO: this uses `src` but that isn't included in the dependencies array
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
          <p>
            To know the minimum sizes based on the distance, we used the
            following formula:
          </p>
          <p>
            Size of your QR Code = Distance between the QR Code and the Scanner
            ÷ 10
          </p>
          <p>
            Example : A 33 cm QR square would be ideal to read at approximately
            3m away
          </p>
        </div>
        <select onChange={handleChange} name="size" id="size">
          <option value={15}>Default: 0.15m</option>
          <option value={50}>0.5m</option>
          <option value={100}>1m</option>
          <option value={200}>2m</option>
        </select>
        <DownloadButton />
        <img className="qr-code" src={src} />
      </div>
    </>
  )
}

export default QR
