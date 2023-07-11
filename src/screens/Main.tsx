import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import About from './About';
import NumberScreen from './NumberScreen';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="NumberScreen" component={NumberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
