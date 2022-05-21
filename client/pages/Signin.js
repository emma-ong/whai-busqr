import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Flex,
  Heading,
  Button,
  Stack,
  Box,
  Link,
  Avatar,
  Container,
} from '@chakra-ui/react'

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
  return (
    <Container h={'100vh'}>
      <Flex
        flexDirection="column"
        width="auto"
        height="50vh"
        backgroundColor="none"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="none" />
          <Heading color="white" fontFamily="'Shadows Into Light', cursive;">
            Welcome
          </Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                borderRadius="5px"
              >
                <Button
                  onClick={handleSignIn}
                  borderRadius="5px"
                  type="submit"
                  variant="solid"
                  backgroundColor="blue.500"
                  width="full"
                  color="white"
                  height="5vh"
                  fontSize="2xl"
                >
                  Login
                </Button>
                <Box color="tomato">
                  New to busqr?{' '}
                  <Link
                    fontWeight="bold"
                    color="blue.300"
                    onClick={handleRegister}
                  >
                    Sign Up
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Signin
