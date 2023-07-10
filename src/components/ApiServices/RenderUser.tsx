import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

interface User {
  id: number,
  first_name: string,
  avatar: string
}

function RenderUser() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users")
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }
        const data = await response.json()
        setUsers(data.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()

  }, [])

  const renderItemComponent = ({ item }: { item: User }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 50, height: 50, borderRadius: 20, marginRight: 10 }}
        />
        <Text>{item.id}</Text>
        <Text>{item.first_name}</Text>
      </View>
    )
  }

  return (
    <View>
      {users.length > 0 && (
        <FlatList
          data={users}
          renderItem={renderItemComponent}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  )
}

export default RenderUser