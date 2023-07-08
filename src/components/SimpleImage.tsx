import React from 'react'
import { Image } from "react-native"

function SimpleImage() {
  return (
    <Image
      // source={require('./path/to/your/image.png')}
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cNLzgxRWXlIUkDPHjLySq7zHKbXzE44K-zRm99aN8Q&s' }}
      style={{ width: 200, height: 200 }}
      resizeMode="contain"
      onLoad={() => console.log("Image loaded")}
    />
  )
}

export default SimpleImage