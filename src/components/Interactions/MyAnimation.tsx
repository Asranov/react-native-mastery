import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

function MyAnimation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <View>
        <Text>Animation</Text>
      </View>
    </Animated.View>
  );
}

export default MyAnimation;
