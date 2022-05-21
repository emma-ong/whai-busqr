import React from 'react'
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'

const Signin = () => {
  return <>
  <Container maxW={'3xl'}>
        <Box textAlign={'center'} py={36}>
          <Heading fontWeight={600} fontSize={'6xl'} lineHeight={'110%'}>
            busqr
          </Heading>
          <Stack
            py={6}
            direction={'column'}
            spacing={6}
            align={'center'}
            alignSelf={'center'}
          >
            <Button>Sign In</Button>
            <Button>Register</Button>
          </Stack>
        </Box>
      </Container>
  </>
}

export default Signin