import React from 'react'
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
            path="/paybusker/:id"
            element={<PayBusker />} 
          />
        </Routes>
      </IfNotAuthenticated>
        </Box>
      </Container>
      <IfAuthenticated>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QR />} />
          <Route path="/updateDetails" element={<Details />} />
          <Route
            path="/paybusker/:id" 
            element={<PayBusker />}
          />
        </Routes>
      </IfAuthenticated>
    </>
  )
}

export default App
