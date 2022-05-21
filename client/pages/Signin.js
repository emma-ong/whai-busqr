import React from 'react'
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

const Signin = () => {
  
  const { loginWithRedirect } = useAuth0()

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }
  const handleRegister = (e) => {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }
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
            <Button onClick={handleSignIn}>Sign In</Button>
            <Button onClick={handleRegister}>Register</Button>
          </Stack>
        </Box>
      </Container>
  </>
}

export default Signin