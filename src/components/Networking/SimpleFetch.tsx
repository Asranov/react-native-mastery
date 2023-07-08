import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

interface ITodo {
  id: number;
  title: string;
}

function SimpleFetch() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json: ITodo[]) => setTodos(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default SimpleFetch;
