import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

import { fetchPublicUserById } from '../actions'
import { useParams } from 'react-router-dom'

const PayBusker = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const dbPublicUser = useSelector((state) => state.publicDbUser)

  useEffect(() => {
    if (dbPublicUser) {
      dispatch(fetchPublicUserById(id))
    }
  }, [])

  return (
    <>
      {dbPublicUser ? (
        <Container maxW={'3xl'}>
          <Box textAlign={'center'} py={36}>
            <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
              Thank you for supporting {dbPublicUser.name}
            </Heading>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Button>Give ${dbPublicUser.payment_option_1}</Button>
              <Button>Give ${dbPublicUser.payment_option_2}</Button>
              <Button>Give ${dbPublicUser.payment_option_3}</Button>
              <Button>Enter custom amount</Button>
              <Button>Profile</Button>
            </Stack>
          </Box>
        </Container>
      ) : null}
    </>
  )
}

export default PayBusker
