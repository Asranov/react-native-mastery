import React, { useState } from 'react'
import { Text, View } from 'react-native'


interface User {
  name: string,
  age: number,
  isMaried?: boolean | undefined
}
const User = () => {
  const [users, setUsers] = useState<User[]>([
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
    <View>
      {users.map((user, index) => {
        return (
          <View key={index}>
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
            {user.isMaried ? (
              <>
                <Text>User is maried</Text>
              </>
            ) : (
              <>
                <Text>User is not maried</Text>
              </>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default User