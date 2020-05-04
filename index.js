"use strict"

const sharp = require('sharp')

const check_valid_image = file_path => sharp(file_path).toBuffer()

const image_file_names = ['normal.jpg', 
                          'invalid_magic_number.jpg', // [Error: Input file contains unsupported image format]
                          'jpeg_magic_number_but_corrupted.jpg'] //[Error: Input file has corrupt header: VipsJpeg: Corrupt JPEG data: 597 extraneous bytes before marker 0xd4 VipsJpeg: JPEG datastream contains no image]

image_file_names.forEach(file_name => {
  check_valid_image('input_images/' + file_name)
    .then(() => console.log('it is a valid image! file name:', file_name))
    .catch(err => console.log('invalid image detected. file name:', file_name, ' error:', err))
})


