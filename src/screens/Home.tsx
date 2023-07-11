import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  NumberScreen: { number: number };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: Props) {
  const numbers = [1, 2, 3, 4, 5];
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberPress = (number: number) => {
    setSelectedNumber(number);
    navigation.navigate('NumberScreen', { number });
  };

  return (
    <View style={styles.container}>
      {numbers.map((number, idx) => {
        return (
          <View key={idx} style={{ marginBottom: 10 }}>
            <Button
              title={`Go to screen ${number}`}
              onPress={() => handleNumberPress(number)}
            />
          </View>

        );
      })}
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  numberContainer: {
    marginVertical: 10,
  },
});

export default Home;
