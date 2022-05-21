import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

import { fetchBusker } from '../actions'

const PayBusker = (props) => {
  const dispatch = useDispatch()

  const busker = useSelector((state) => state.busker)

  useEffect(() => {
    dispatch(fetchBusker(props.buskerId))
  }, [])

  function handleFetchBusker() {
    dispatch(fetchBusker(1))
  }

  return (
    <>
      {busker ? (
        <Container maxW={'3xl'}>
          <Box textAlign={'center'} py={36}>
            <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
              Thank you for supporting {busker.name}
            </Heading>
            <Stack
              py={6}
              direction={'column'}
              spacing={6}
              align={'center'}
              alignSelf={'center'}
            >
              <Button>Give ${busker.payment_option_1}</Button>
              <Button>Give ${busker.payment_option_2}</Button>
              <Button>Give ${busker.payment_option_3}</Button>
              <Button>Enter custom amount</Button>
              <Button>Profile</Button>
            </Stack>
          </Box>
        </Container>
      ) : (
        <Button onClick={handleFetchBusker}>fetchBusker 1 Frank</Button>
      )}
    </>
  )
}

export default PayBusker
