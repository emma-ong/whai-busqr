import React, { useEffect } from 'react'
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'
import QR from './QR'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Signin from '../pages/Signin'
import Nav from './Nav'
import PayBusker from './PayBusker'

function App() {
  const { loginWithRedirect } = useAuth0()

  cacheUser(useAuth0)
  useEffect(() => {}, [])
  // import Footer from '../components/Footer';
  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }
  const handleRegister = (e) => {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  //Will require state of user to be set here to pass to route components

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const buskerId = getRandomIntInclusive(1, 3)

  return (
    <>
      <Nav />
      <Container maxW={'3xl'}>
        <Box textAlign={'center'} py={36}>
          <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
            busqr
          </Heading>
          <IfNotAuthenticated>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Button onClick={handleSignIn}>Sign In</Button>
              <Button onClick={handleRegister}>Register</Button>

              <QR />
            </Stack>
          </IfNotAuthenticated>
        </Box>
      </Container>
      <IfAuthenticated>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/qrcode" element={<QR />} />
          <Route
            path="/paybusker"
            element={<PayBusker buskerId={buskerId} />}
          />
          {/* <Footer /> */}
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
