import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  NumberScreen: { number: number };
};

type NumberScreenRouteProp = RouteProp<RootStackParamList, 'NumberScreen'>;

function NumberScreen() {
  const route = useRoute<NumberScreenRouteProp>();
  const { number } = route.params;

  return (
    <View>
      <Text>This is the Number Screen</Text>
      <Text>Number: {number}</Text>
    </View>
  );
}

export default NumberScreen;
