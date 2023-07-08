import React from 'react'
import { FlatList, Text } from 'react-native'

interface Idata {
  id: number,
  text: string
}


const data: Idata[] = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

const renderItem = ({ item }: { item: Idata }) => <Text>{item.text}</Text>;

const SimpleFlatList = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
  />
);

export default SimpleFlatList