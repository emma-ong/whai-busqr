import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ModalPersonal from './ModalPersonal'

import { Box, Container, Heading, Stack } from '@chakra-ui/react'

function BuskerHome() {
  const user = useSelector((state) => state.signedIn)

  return (
    <>
      {user ? (
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
            <Heading color="white" fontWeight={600} fontSize={'6xl'}>
              {user.name}
            </Heading>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
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
                  bio={user.bio}
                  location={user.location}
                  email={user.email}
                  earnings={user.earnings}
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
                  <Link to={`/paybusker/${user.id}`}>Your Public Page</Link>
                </Heading>
              </Box>
            </Stack>
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export default BuskerHome
