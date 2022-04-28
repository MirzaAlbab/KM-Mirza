import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CloudMessage from './src/components/CloudMessage';
import Maps from './src/components/Maps';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <CloudMessage /> */}
      <Maps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
