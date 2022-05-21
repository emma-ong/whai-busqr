import React from 'react'
import { useSelector } from 'react-redux'
import { saveAs } from 'file-saver'
import { DownloadIcon } from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'


function DownloadButton() {
  const imgUrl = useSelector(state => state.imgUrl)
  function downloadImage() {
   if (imgUrl !== null) {
     saveAs(imgUrl, 'QRCode.png')
    }
    return
  }

  return (
  <Menu>
  <MenuButton p={5} mb={5} as={Button}>
  <DownloadIcon/>
  </MenuButton>
  <MenuList>
    <MenuItem onClick={ imgUrl ? downloadImage : null}>Download .png</MenuItem>
  </MenuList>
</Menu>
  )
}


export default DownloadButton