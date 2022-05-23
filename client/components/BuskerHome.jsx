import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ModalPersonal from './ModalPersonal'
import Earnings from './Earnings'
import { useAuth0 } from '@auth0/auth0-react'

import { Box, Container, Heading, Stack, Button } from '@chakra-ui/react'

function BuskerHome() {
  const { logout } = useAuth0()

  const user = useSelector((state) => state.signedIn)
  const [busker, setBusker] = useState({})
  console.log(user)

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  useEffect(() => {
   if(user.name){
    setBusker(user)
   }
  }, [user])

  return (
    <>
      {busker ? (
        <Container maxW={'3xl'} h={'100vh'}>
          <Box textAlign={'center'} py={18}>
            <Heading
              color="white"
              fontWeight={100}
              fontSize={'5xl'}
              fontFamily="'Shadows Into Light', cursive;"
            >
              Welcome back,
            </Heading>
            <Heading
              color="white"
              fontWeight={600}
              fontSize={'6xl'}
              fontFamily="'Shadows Into Light', cursive;"
            >
              {busker.name}
            </Heading>

            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Box
                mt={5}
                p={10}
                w={'45%'}
                borderRadius={25}
                borderWidth="1px"
                borderColor="whiteAlpha.900"
              >
                <Earnings total={busker.earnings} />
              </Box>
              <Box
                p={10}
                w={'45%'}
                borderRadius={25}
                borderWidth="1px"
                borderColor="whiteAlpha.900"
                bgGradient="linear(to-r, #0A103A, #1B235B)"
              >
                <Heading
                  color="white"
                  fontFamily="'Shadows Into Light', cursive;"
                >
                  <Link to={'/qrcode'}>Get QR Code</Link>
                </Heading>
              </Box>
              <Box
                p={6}
                w={'45%'}
                borderRadius={25}
                borderWidth="1px"
                bgGradient="linear(to-r, #0A103A, #1B235B)"
              >
                <ModalPersonal
                  bio={busker.bio}
                  location={busker.location}
                  email={busker.email}
                />
              </Box>
              <Box
                p={10}
                w={'45%'}
                borderRadius={25}
                borderWidth="1px"
                borderColor="whiteAlpha.900"
                bgGradient="linear(to-r, #0A103A, #1B235B)"
              >
                <Heading
                  color="white"
                  fontFamily="'Shadows Into Light', cursive;"
                >
                  <Link to={`/paybusker/${busker.id}`}>Your Public Page</Link>
                </Heading>
              </Box>
            </Stack>
          </Box>
        </Container>
      ) : (
        <Button onClick={handleLogout}>Logout</Button>
      )}
    </>
  )
}

export default BuskerHome
