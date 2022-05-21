import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

import { fetchBuskerById } from '../actions'
import { useParams } from 'react-router-dom'

const PayBusker = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const busker = useSelector((state) => state.busker)

  useEffect(() => {
    dispatch(fetchBuskerById(id))
  }, [])

  return (
    <>
      {busker?.name ? (
        <Container maxW={'3xl'} h={'100vh'}>
          <Box textAlign={'center'} py={18}>
            <Heading
              color="white"
              fontWeight={600}
              fontSize={'4xl'}
              lineHeight={'110%'}
              fontFamily="'Shadows Into Light', cursive;"
            >
              Thank you for supporting
            </Heading>
            <Heading
              color="white"
              lineHeight={'110%'}
              fontWeight={600}
              fontSize={'6xl'}
              fontFamily="'Shadows Into Light', cursive;"
            >
              {busker.name}
            </Heading>
            <Stack
              mt={10}
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
      ) : null}
    </>
  )
}

export default PayBusker
