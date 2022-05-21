import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserByAuth, fetchUserById } from '../actions'

import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

function BuskerHome() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const dbUser = useSelector((state) => state.dbUser)

  useEffect(() => {
    fetchUserByAuth(user.auth)
  }, [])

  function handleFetchUserByIdOne() {
    dispatch(fetchUserById(1))
  }

  function handleFetchUserByIdTwo() {
    dispatch(fetchUserById(2))
  }

  function handleFetchUserByIdThree() {
    dispatch(fetchUserById(3))
  }

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
              <Button onClick={handleFetchUserByIdOne}>FetchUserById: 1</Button>
              <Button onClick={handleFetchUserByIdTwo}>FetchUserById: 2</Button>
              <Button onClick={handleFetchUserByIdThree}>
                FetchUserById: 3
              </Button>
            </Stack>
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export default BuskerHome
