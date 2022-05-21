import React, { useEffect } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
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
            </Routes>
          </IfNotAuthenticated>
        </Box>
      </Container>
      <IfAuthenticated>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QR />} />
          <Route path="/paybusker" element={<PayBusker />} />
          {/* <Footer /> */}
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
