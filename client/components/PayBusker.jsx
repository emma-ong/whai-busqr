import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

import { fetchUserById } from '../actions'

const PayBusker = () => {
  const dispatch = useDispatch()

  const dbUser = useSelector((state) => state.dbUser)

  // useEffect(() => {
  //   dispatch(fetchUserById(dbUser.auth))
  // }, [])

  // function handleFetchUser() {
  //   dispatch(fetchUser('auth0|somethingFrank'))
  // }

  return (
    <>
      {dbUser ? (
        <Container maxW={'3xl'}>
          <Box textAlign={'center'} py={36}>
            <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
              Thank you for supporting {dbUser.name}
            </Heading>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Button>Give ${dbUser.payment_option_1}</Button>
              <Button>Give ${dbUser.payment_option_2}</Button>
              <Button>Give ${dbUser.payment_option_3}</Button>
              <Button>Enter custom amount</Button>
              <Button>Profile</Button>
              {/* <Button onClick={handleFetchUser}>fetchUserFrank</Button> */}
            </Stack>
          </Box>
        </Container>
      ) : (
        null()
        // <Button onClick={handleFetchUser}>fetchUser Frank</Button>
      )}
    </>
  )
}

export default PayBusker
