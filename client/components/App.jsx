import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import QR from '../pages/QR'
import Nav from './Nav'
import PayBusker from './PayBusker'
import UpdateUser from './UpdateUser'
import Registration from './Registration'

function App() {
  cacheUser(useAuth0)

  return (
    <div className="main-background">
      <Nav />
      <Container maxW={'3xl'}>
        <Box textAlign={'center'} py={20}>
          <Heading
            color="white"
            fontWeight={600}
            fontSize="15vh"
            fontFamily="'Shadows Into Light', cursive;"
          >
            busqr
          </Heading>
          <IfNotAuthenticated>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/paybusker/:id" element={<PayBusker />} />
            </Routes>
          </IfNotAuthenticated>
        </Box>
      </Container>
      <IfAuthenticated>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QR />} />
          <Route path="/paybusker/:id" element={<PayBusker />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </IfAuthenticated>
    </div>
  )
}

export default App
