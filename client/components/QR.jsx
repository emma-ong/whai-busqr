import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useDispatch, useSelector } from 'react-redux'
import DownloadButton from './DownloadButton'
import { setImgURL } from '../actions'

import { Select, Center, Container, Heading, Text } from '@chakra-ui/react'
import QRPopover from './QRPopover'

const QR = () => {
  const dispatch = useDispatch()
  const [src, setSrc] = useState(null)
  const [size, setSize] = useState(null)
  const user = useSelector((state) => state.signedIn)

  useEffect(() => {
    getImgUrl(size)
    if (src !== null) {
      dispatch(setImgURL(src))
    }
  }, [user,size])

  function getImgUrl(size) {
    //once buskerId set via registration page, to use this url for testing: http://localhost:3000/paybusker/${buskerId}
    //Scale ratio is 8:3cm
    QRCode.toDataURL(`https://whai-busqr.herokuapp.com/${user.id}`, {
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
    console.log(distance)
    setSize(qrSize)
  }

  return (
    <>
      <Container maxW={'100vw'} h={'100vh'}>
        <Center>
          <Heading
            textAlign={'center'}
            mb={5}
            color="white"
            fontSize={'6xl'}
            fontFamily="'Shadows Into Light', cursive;"
          >
            Your Unique QR Code
          </Heading>
        </Center>
        <Center>
          <Select
            pb={5}
            mt={5}
            bg="white"
            width={'30%'}
            onChange={handleChange}
            name="size"
            id="size"
            placeholder="Select distance"
            variant="outline"
          >
            <option value={15}>0.15m</option>
            <option value={50}>0.5m</option>
            <option value={100}>1m</option>
            <option value={200}>2m</option>
          </Select>
          <QRPopover />
        </Center>
        <Center>
          <DownloadButton />
        </Center>
        <Center>
          {src ? (
            <img className="qr-code" src={src} />
          ) : (
            <Text>Loading QR Code...</Text>
          )}
        </Center>
      </Container>
    </>
  )
}

export default QR
