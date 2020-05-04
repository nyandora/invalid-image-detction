const sharp = require('sharp');

const isValidJpeg = async fileName => {
  try {
    await sharp('input_images/' + fileName).toBuffer()
  } catch(err) {
    console.log(err)
    return false
  }
  return true
}

['normal.jpg', 
 'invalid_magic_number.jpg', // [Error: Input file contains unsupported image format]
 'jpeg_magic_number_but_corrupted.jpg'] //[Error: Input file has corrupt header: VipsJpeg: Corrupt JPEG data: 597 extraneous bytes before marker 0xd4 VipsJpeg: JPEG datastream contains no image]
.forEach(async fileName => {
  result = await isValidJpeg(fileName)
  console.log('fileName:', fileName, ', result:', result)
})


