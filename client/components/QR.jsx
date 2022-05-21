import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useDispatch, useSelector } from 'react-redux'
import DownloadButton from './DownloadButton'
import { fetchUserByAuth, setImgURL } from '../actions'

const QR = () => {
  const dispatch = useDispatch()
  const [src, setSrc] = useState(null)
  const [size, setSize] = useState(null)
  const dbUser = useSelector((state) => state.dbUser)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUserByAuth(user.auth0Id))
    getImgUrl(size)
    if (src !== null) {
      dispatch(setImgURL(src))
    }
  }, [user, dbUser])

  function getImgUrl(size) {
    //once buskerId set via registration page, to use this url for testing: http://localhost:3000/paybusker/${buskerId}
    //Scale ratio is 8:3cm
    QRCode.toDataURL(`http://localhost:3000/paybusker/${dbUser.id}`, {
      scale: size,
    })
      .then((res) => {
        setSrc(res)
      })
      .catch((err) => console.log(err))
  }

  function handleChange(e) {
    let distance = e.target.value
    let qrSize = (distance / 10) * (8 / 3)
    setSize(qrSize)
  }

  // useEffect( () => {

  // }, [size, src])

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
        {src ? (
          <img className="qr-code" src={src} />
        ) : (
          <p>Loading QR Code...</p>
        )}
      </div>
    </>
  )
}

export default QR
