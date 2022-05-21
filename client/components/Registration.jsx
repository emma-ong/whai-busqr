import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, addProfilePic } from '../actions'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  Center,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'

const Registration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  const authData = useSelector((state) => state.authData)

  const [updatePic, setUpdatePic] = useState(null)
  const [newUser, setNewUser] = useState({
    profile_pic: './images/silhouette.svg',
    location: '',
    bio: 'Tell your supporters a bit about yourself...',
    payment_option_1: '2',
    payment_option_2: '5',
    payment_option_3: '10',
  })

  useEffect(() => {
    if (authData?.auth0Id)
      setNewUser({
        ...newUser,
        name: authData.given_name,
        auth: authData.auth0Id,
        email: authData.email,
      })
  }, [authData])

  const navigate = useNavigate()

  const clearForm = () => {
    setNewUser({
      name: 'This Is The Name Supporters Will See',
      location: '',
      bio: 'Tell your supporters a bit about yourself...',
      payment_option_1: '2',
      payment_option_2: '5',
      payment_option_3: '10',
    })
  }

  function handleChange(evt, field) {
    setNewUser({
      ...newUser,
      [field]: evt.target.value,
    })
  }

  function handleNumberChange(value, field) {
    setNewUser({
      ...newUser,
      [field]: value,
    })
  }

  function handleSubmit() {
    navigate('/')
    return dispatch(addNewUser(newUser)).catch((err) => console.log(err))
  }

  function handleChangePic(e) {
    setUpdatePic(e.target.files[0])
  }

  function handleSubmitPic() {
    return dispatch(addProfilePic(updatePic)).then(() => {
      setNewUser({
        ...newUser,
        profile_pic: `./images/${updatePic.name}`,
      })
    })
  }

  return (
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
          Busker Registration
        </Heading>
        <FormControl id="profile_pic">
          <FormLabel>Profile Pic</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={newUser.profile_pic} />
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
                            <FormLabel htmlFor="image">Upload image:</FormLabel>
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
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            name="name"
            placeholder={authData?.given_name}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(value) => handleChange(value, 'name')}
          />
        </FormControl>
        <FormControl id="location">
          <FormLabel>
            Location - Update This Anytime In Your Dashboard
          </FormLabel>
          <Input
            id="location"
            placeholder="Location"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(value) => handleChange(value, 'location')}
          />
        </FormControl>
        <FormControl id="bio">
          <FormLabel>Bio </FormLabel>
          <Textarea
            id="bio"
            size="lg"
            placeholder="Tell your supporters a bit about yourself..."
            _placeholder={{ color: 'gray.500' }}
            onChange={(value) => handleChange(value, 'bio')}
          />
        </FormControl>
        <FormLabel>Give your supporters preset amounts to gift you:</FormLabel>

        <FormControl id="payment_option_1" isRequired>
          <FormLabel>Amount 1:</FormLabel>
          <HStack spacing="15px">
            <NumberInput
              id="payment_option_1"
              maxW="80px"
              mr="2rem"
              value={newUser.payment_option_1}
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
              value={newUser.payment_option_1}
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
                children={newUser.payment_option_1}
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
              value={newUser.payment_option_2}
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
              value={newUser.payment_option_2}
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
                children={newUser.payment_option_2}
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
              value={newUser.payment_option_3}
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
              value={newUser.payment_option_3}
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
                children={newUser.payment_option_3}
              />
            </Slider>
          </HStack>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            onClick={clearForm}
            _hover={{
              bg: 'red.500',
            }}
          >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
Registration.defaultProps = {
  onSubmit: () => {},
}

export default Registration
