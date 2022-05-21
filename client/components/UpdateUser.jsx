import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Button,
  Editable,
  EditableTextarea,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useToast,
} from '@chakra-ui/react'

import { fetchUserByAuth, updateUser } from '../actions'

const UpdateUser = () => {
  // const user = useSelector((state) => state.user)
  const dbUser = useSelector((state) => state.dbUser)

  const [updateData, setUpdateData] = useState({})

  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(() => {
    setUpdateData({
      name: dbUser.name,
      email: dbUser.email,
      location: dbUser.location,
      bio: dbUser.bio,
      payment_option_1: dbUser.payment_option_1,
      payment_option_2: dbUser.payment_option_2,
      payment_option_3: dbUser.payment_option_3,
      auth: dbUser.auth,
    })
  }, [dbUser])

  function handleUpdateForm(value, field) {
    setUpdateData({ ...updateData, [field]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateUser(updateData))
    toast({
      title: 'Details Updated',
      description: "We've updated your details for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  function fetchFrank() {
    dispatch(fetchUserByAuth('auth0|somethingFrank'))
  }

  return (
    <>
      {dbUser.name ? (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
              User Profile Edit
            </Heading>
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={['column', 'row']} spacing={6}>
                <Center>
                  <Avatar size="xl" src={dbUser.profile_pic}>
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      aria-label="remove Image"
                    />
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Editable
                type="name"
                defaultValue={dbUser.name}
                onChange={(value) => handleUpdateForm(value, 'name')}
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Editable
                type="email"
                defaultValue={dbUser.email}
                onChange={(value) => handleUpdateForm(value, 'email')}
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Editable
                type="text"
                defaultValue={dbUser.location}
                onChange={(value) => handleUpdateForm(value, 'location')}
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="bio" isRequired>
              <FormLabel>Bio</FormLabel>
              <Editable
                type="text"
                defaultValue={dbUser.bio}
                onChange={(value) => handleUpdateForm(value, 'bio')}
              >
                <EditableTextarea />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="payment_option_1" isRequired>
              <FormLabel>Payment Option 1</FormLabel>
              <Editable
                type="text"
                defaultValue={dbUser.payment_option_1}
                onChange={(value) =>
                  handleUpdateForm(value, 'payment_option_1')
                }
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="payment_option_2" isRequired>
              <FormLabel>Payment Option 2</FormLabel>
              <Editable
                type="text"
                defaultValue={dbUser.payment_option_2}
                onChange={(value) =>
                  handleUpdateForm(value, 'payment_option_2')
                }
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <FormControl id="payment_option_3" isRequired>
              <FormLabel>Payment Option 3</FormLabel>
              <Editable
                type="text"
                defaultValue={dbUser.payment_option_3}
                onChange={(value) =>
                  handleUpdateForm(value, 'payment_option_3')
                }
              >
                <EditableInput />
                <EditablePreview />
              </Editable>
            </FormControl>
            <Stack spacing={6} direction={['column', 'row']}>
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500',
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      ) : (
        <Button onClick={fetchFrank}>Fetch Frank</Button>
      )}
    </>
  )
}

export default UpdateUser
