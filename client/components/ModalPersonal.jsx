import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ModalPersonal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        w={'100%'}
        p={10}
        borderRadius={25}
        bg="none"
        color="white"
        fontFamily="'Shadows Into Light', cursive;"
        fontSize={'4xl'}
      >
        Personal
        <br />
        Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Personal Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Biography</Heading>
            <Text> {props.bio}</Text>
            <Heading>Email</Heading>
            <Text> {props.email}</Text>
            <Heading>Location</Heading>
            <Text> {props.location}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link to={'/update'}>Update Details</Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPersonal
