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
    dispatch(fetchUserByAuth(user.auth0Id))
  }, [user, dbUser])

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
              <Text>Total Earned: $1,000,000</Text>
              <Link to={'/qrcode'}>QR Code</Link>
              <Link to={'/updateDetails'}>Update Details</Link>
            </Stack>
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export default BuskerHome
