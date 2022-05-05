import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import React from 'react';
import TouchID from 'react-native-touch-id';

export default function TouchAuth() {
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  const testHandler = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          Alert.alert('FaceID is supported.');
        } else if (biometryType === 'TouchID') {
          Alert.alert('TouchID is supported.');
        } else if (biometryType === true) {
          Alert.alert('TouchID is supported.');
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  };

  const pressHandler = () => {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={() => pressHandler()}>
        <Text>authenticate with Touch ID</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => testHandler()}>
        <Text>test is supported for biometry</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({});
