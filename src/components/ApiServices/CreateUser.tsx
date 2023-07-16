import React, { useState } from 'react'
import { Alert, Button, Text, View, TextInput } from 'react-native';

function CreateUser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("")

  const createUser = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users", {
        "method": "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          job: job
        })

      })

      const data = await response.json();

      Alert.alert(
        'User created',
        `User ID: ${data.id}\nName: ${data.name}\nJob: ${data.job}`
      );

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <View>
        <Text>Name:</Text>
        <TextInput value={name} onChangeText={setName} />

        <Text>Job:</Text>
        <TextInput value={job} onChangeText={setJob} />

        <Button title="Create User" onPress={createUser} />
      </View>
    </>
  )
}

export default CreateUser