import React from 'react'
import { useSelector } from 'react-redux'
import { saveAs } from 'file-saver'


function DownloadButton() {
  const imgUrl = useSelector(state => state.imgUrl)
  function downloadImage() {
   if (imgUrl !== null) {
     saveAs(imgUrl, 'QRCode.png')
    }
    return
  }

  return <>
    <button onClick={ imgUrl ? downloadImage : null}>Download QR Code</button>
  </>
}


export default DownloadButton