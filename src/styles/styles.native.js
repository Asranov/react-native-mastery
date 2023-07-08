import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  globalContainer: {
    // Your platform-specific styles
  },
  globalText: {
    color: Platform.select({
      ios: 'red',
      android: 'green',
    }),
  },
});
