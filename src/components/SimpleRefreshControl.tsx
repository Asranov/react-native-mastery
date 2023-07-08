import React, { useState } from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';

const SimpleRefreshControl = () => {
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData()
      .then(() => {
        setRefreshing(false);
      });
  };

  return (
    <FlatList
      data={['Item 1', 'Item 2', 'Item 3']}
      renderItem={({ item }) => <Text>{item}</Text>}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default SimpleRefreshControl;
