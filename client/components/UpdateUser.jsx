import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  Center,
  useToast,
} from '@chakra-ui/react'

import { updateUser } from '../actions'

const UpdateUser = () => {
  const user = useSelector((state) => state.signedIn)

  const [updateData, setUpdateData] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    setUpdateData({
      name: user.name,
      email: user.email,
      location: user.location,
      bio: user.bio,
      payment_option_1: user.payment_option_1,
      payment_option_2: user.payment_option_2,
      payment_option_3: user.payment_option_3,
      auth: user.auth,
    })
  }, [user])

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
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <>
      {user.name ? (
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
                  <Avatar size="xl" src={user.profile_pic}></Avatar>
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
                defaultValue={user.name}
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
                defaultValue={user.email}
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
                defaultValue={user.location}
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
                defaultValue={user.bio}
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
                defaultValue={user.payment_option_1}
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
                defaultValue={user.payment_option_2}
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
                defaultValue={user.payment_option_3}
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
                onClick={() => navigate('/')}
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
      ) : null}
    </>
  )
}

export default UpdateUser
