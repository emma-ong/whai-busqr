import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text
} from '@chakra-ui/react'

function QRPopover() {
 return (
  <Popover>
  <PopoverTrigger>
    <Button ml={5}>?</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Distance</PopoverHeader>
    <PopoverBody>
      <Text>
        <p>
        Your uniquely generated QR Code will take users to your public page
        </p>
        <br />
        <p>
        The distance refers to the optimal distance a device will need to scan your QR code
        
        </p>
         <br />
        <p>
        The size of the QR Code generated will vary dependant on the distance you select
        </p>
      </Text>
    </PopoverBody>
  </PopoverContent>
</Popover>
 )
}

export default QRPopover