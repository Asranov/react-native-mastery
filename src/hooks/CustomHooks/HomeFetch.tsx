interface Todo {
  id: number;
  title: string;
}

import React from 'react';
import { Text, View } from 'react-native';
import useFetch from './useFetch';

const HomeFetch = () => {
  const data: Todo[] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <View>
      {data.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

export default HomeFetch;
