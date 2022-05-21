import React, { useEffect } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import QR from '../pages/QR'
import Details from '../pages/Details'
import Nav from './Nav'
import PayBusker from './PayBusker'

function App() {
  cacheUser(useAuth0)
  useEffect(() => {}, [])
  // import Footer from '../components/Footer';

  return (
    <>
      <Nav />
      <Container maxW={'3xl'}>
        <Box textAlign={'center'} py={36}>
          <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
            busqr
          </Heading>
      <IfNotAuthenticated>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route
            path="/paybusker"//might need to alter to /paybusker/{buskerId}
            element={<PayBusker buskerId={1} />}
          />
        </Routes>
      </IfNotAuthenticated>
        </Box>
      </Container>
      <IfAuthenticated>
        <Routes>
          {/* NEEDS TO HAVE BUSKERID IN URLs */}
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QR />} />
          <Route path="/updateDetails" element={<Details />} />
          <Route
            path="/paybusker"
            element={<PayBusker buskerId={1} />}
          />
          {/* <Footer /> */}
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
