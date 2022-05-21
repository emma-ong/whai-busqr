import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserByAuth } from '../actions'

import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

function BuskerHome() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const dbUser = useSelector((state) => state.dbUser)

  useEffect(() => {
    if (user) dispatch(fetchUserByAuth(user.auth0Id))
  }, [user])

  return (
    <>
      {dbUser ? (
        <Container maxW={'3xl'}>
          <Box textAlign={'center'} py={36}>
            <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
              {dbUser.name}
            </Heading>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Text>Bio: {dbUser.bio}</Text>
              <Text>Location: {dbUser.location}</Text>
              <Text>Email: {dbUser?.email}</Text>
              <Link to={'/update'}>Update Details</Link>
              <Link to={'/qrcode'}>QR Code</Link>
            </Stack>
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export default BuskerHome
