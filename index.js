"use strict"

const sharp = require('sharp')

const isValidJpeg = async filePath => {
  try {
    await sharp(filePath).toBuffer()
  } catch(err) {
    console.log(err)
    return false
  }
  return true
}

const test_images = ['normal.jpg', 
                      'invalid_magic_number.jpg', // [Error: Input file contains unsupported image format]
                      'jpeg_magic_number_but_corrupted.jpg'] //[Error: Input file has corrupt header: VipsJpeg: Corrupt JPEG data: 597 extraneous bytes before marker 0xd4 VipsJpeg: JPEG datastream contains no image]

test_images.forEach(fileName => {
  isValidJpeg('input_images/' + fileName)
    .then(result => console.log('fileName:', fileName, ', result:', result))
    .catch(err => console.log(err))
})


