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
  Input,
  Stack,
  HStack,
  useColorModeValue,
  Avatar,
  Center,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'

import { updateUser, addProfilePic } from '../actions'

const UpdateUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  const user = useSelector((state) => state.signedIn)

  const [updateData, setUpdateData] = useState({})
  const [updatePic, setUpdatePic] = useState(null)

  useEffect(() => {
    setUpdateData({
      id: user.id,
      name: user.name,
      email: user.email,
      location: user.location,
      bio: user.bio,
      profile_pic: user.profile_pic,
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

  function handleChangePic(e) {
    setUpdatePic(e.target.files[0])
  }

  function handleSubmitPic() {
    return dispatch(addProfilePic(updatePic)).then(() => {
      setUpdateData({
        ...updateData,
        profile_pic: `./images/${updatePic.name}`,
      })
    })
  }

  function handleNumberChange(value, field) {
    setUpdateData({
      ...updateData,
      [field]: value,
    })
  }
  return (
    <>
      {user.name ? (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg="none">
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
                  <Avatar size="xl" src={updateData.profile_pic} />
                </Center>
                <Center w="full">
                  <Button w="80%" onClick={onOpen}>
                    Change Profile Pic
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Change Profile Pic</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Formik initialValues={{}} onSubmit={handleSubmitPic}>
                          {() => (
                            <Form encType="multipart/form-data">
                              <FormControl>
                                <FormLabel htmlFor="image">
                                  Upload image:
                                </FormLabel>
                                <Input
                                  type="file"
                                  name="profile-pic"
                                  id="image"
                                  accept="image/*"
                                  onChange={handleChangePic}
                                />
                              </FormControl>
                              <div>
                                <Button
                                  type="submit"
                                  colorScheme="teal"
                                  m={2}
                                  onClick={onClose}
                                >
                                  Change Picture
                                </Button>
                                <Button onClick={onClose} m={2}>
                                  Cancel
                                </Button>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Center>{' '}
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
            <FormLabel>
              Give your supporters preset amounts to gift you:
            </FormLabel>

            <FormControl id="payment_option_1" isRequired>
              <FormLabel>Amount 1:</FormLabel>
              <HStack spacing="15px">
                <NumberInput
                  id="payment_option_1"
                  maxW="80px"
                  mr="2rem"
                  value={updateData.payment_option_1}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_1')
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  id="payment_option_1"
                  maxW="180px"
                  flex="1"
                  focusThumbOnChange={false}
                  value={updateData.payment_option_1}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_1')
                  }
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    fontSize="sm"
                    boxSize="32px"
                    // eslint-disable-next-line react/no-children-prop
                    children={updateData.payment_option_1}
                  />
                </Slider>
              </HStack>
            </FormControl>

            <FormControl id="payment_option_2" isRequired>
              <FormLabel>Amount 2:</FormLabel>
              <HStack spacing="15px">
                <NumberInput
                  id="payment_option_2"
                  maxW="80px"
                  mr="2rem"
                  value={updateData.payment_option_2}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_2')
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  id="payment_option_2"
                  maxW="180px"
                  flex="1"
                  focusThumbOnChange={false}
                  value={updateData.payment_option_2}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_2')
                  }
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    fontSize="sm"
                    boxSize="32px"
                    // eslint-disable-next-line react/no-children-prop
                    children={updateData.payment_option_2}
                  />
                </Slider>
              </HStack>
            </FormControl>
            <FormControl id="payment_option_3" isRequired>
              <FormLabel>Amount 3:</FormLabel>
              <HStack spacing={15}>
                <NumberInput
                  id="payment_option_3"
                  maxW="80px"
                  mr="2rem"
                  value={updateData.payment_option_3}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_3')
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  id="payment_option_3"
                  maxW="180px"
                  flex="1"
                  focusThumbOnChange={false}
                  value={updateData.payment_option_3}
                  max={30}
                  onChange={(value) =>
                    handleNumberChange(value, 'payment_option_3')
                  }
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    fontSize="sm"
                    boxSize="32px"
                    // eslint-disable-next-line react/no-children-prop
                    children={updateData.payment_option_3}
                  />
                </Slider>
              </HStack>
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
