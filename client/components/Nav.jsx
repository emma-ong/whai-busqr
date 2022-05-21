import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

import { IfAuthenticated } from './Authenticated'
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  ArrowBackIcon,
  ArrowLeftIcon,
  SunIcon,
} from '@chakra-ui/icons'

function Nav() {
  const { logout } = useAuth0()
  const user = useSelector((state) => state.signedIn)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleLogoff = (e) => {
    e.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  return (
    <>
      {user?.name ? (
        <div>
          <Button className="navButton" boxShadow="dark-lg" onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent color="white" bg="#080D33">
              <DrawerHeader className="menuHeader" borderBottomWidth="1px">
                busqr
              </DrawerHeader>
              <DrawerBody>
                <p className="menuLink">
                  <a href="/">
                    <ArrowBackIcon /> Home
                  </a>
                </p>
                <IfAuthenticated>
                  <p className="menuLink" aria-label="paybusker">
                    <a href={`/paybusker/${user.id}`}>
                      <ArrowBackIcon /> Your Public Page
                    </a>
                  </p>
                  <p className="menuLink" aria-label="qrcode">
                    <a href="/qrcode">
                      <ArrowBackIcon /> Get QR Code
                    </a>
                  </p>
                  <p className="menuLink" aria-label="update">
                    <a href={`/update`}>
                      <ArrowBackIcon /> Update Your Details
                    </a>
                  </p>
                  <p className="menuLink" aria-label="logout">
                    <a href="/" onClick={handleLogoff}>
                      <ArrowLeftIcon /> Log off
                    </a>
                  </p>
                  <br />
                  <br />
                  <p className="menuLink" aria-label="login message">
                    <SunIcon /> Signed in as {user.name}
                  </p>
                </IfAuthenticated>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      ) : null}
    </>
  )
}

export default Nav
