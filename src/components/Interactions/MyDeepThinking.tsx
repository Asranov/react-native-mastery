import React, { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

interface ListItem {
  id: string;
  text: string;
}

function MyDeepThinking() {
  const [data, setData] = useState<ListItem[]>(generateData(1000));

  const renderItem = useCallback(({ item }: { item: ListItem }) => (
    <Text>{item.text}</Text>
  ), []);

  const handleLoadMore = useCallback(() => {
    const newData = generateData(1000);
    setData((prevData) => prevData.concat(newData));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

function generateData(count: number): ListItem[] {
  const data: ListItem[] = [];
  for (let i = 0; i < count; i++) {
    const item: ListItem = {
      id: `item-${i}`,
      text: `Item ${i}`,
    };
    data.push(item);
  }
  return data;
}

export default MyDeepThinking;
