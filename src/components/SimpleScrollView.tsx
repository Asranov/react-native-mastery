import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

interface Iuser {
  id: number;
  name: string;
}

function SimpleScrollView() {
  const users: Iuser[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Stiv" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Joe" },
    { id: 5, name: "Aliya" },
    { id: 6, name: "Emma" },
  ];

  return (
    <ScrollView>
      {users.map((user, idx) => {
        return (
          <View key={idx}>
            <Text>{user.name}</Text>
          </View>
        )
      })}
    </ScrollView>
  );
}

export default SimpleScrollView;
