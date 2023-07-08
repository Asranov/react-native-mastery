import { Animated, Text, TouchableOpacity, View } from 'react-native';

function MyAnimatedComponent() {
  const opacity = new Animated.Value(1);

  function animateOpacity() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <TouchableOpacity onPress={animateOpacity}>
      <Animated.View style={{ opacity }}>
        {/* Your content */}
      </Animated.View>
    </TouchableOpacity>
  );
}

export default MyAnimatedComponent