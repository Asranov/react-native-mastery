import React, { useState } from 'react'


interface User {
  name: string,
  age: number,
  isMaried?: boolean
}
const User = () => {
  const [user, setUser] = useState<User[]>([
    {
      name: "Eshmat",
      age: 20,
      isMaried: true
    },
    {
      name: "Toshmat",
      age: 23,
    },
  ])

  return (
    <>

    </>
  )
}

export default User