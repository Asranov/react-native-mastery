import React, { useState, useMemo } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

interface ListItem {
  id: string;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
});

const FilteredList: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [data] = useState<ListItem[]>([
    { id: '1', label: 'apple' },
    { id: '2', label: 'banana' },
    { id: '3', label: 'orange' },
    { id: '4', label: 'pear' },
  ]);

  const filteredData = useMemo(() => {
    return data.filter((item) => item.label.includes(filter));
  }, [data, filter]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={filter}
        onChangeText={setFilter}
        placeholder="Type to filter..."
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Text>{item.label}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FilteredList;
