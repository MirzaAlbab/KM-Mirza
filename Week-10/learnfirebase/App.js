import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function App() {
  const Map = () => {
    const {width, height} = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const Latitude = 37.78825;
    const Longitude = -122.4324;
    const LatitudeDelta = 0.0922;
    const LongitudeDelta = LatitudeDelta * ASPECT_RATIO;
    const Space = 0.01;

    const [currentPosition, setCurrentPosition] = useState({
      latitude: Latitude,
      longitude: Longitude,
      latitudeDelta: LatitudeDelta,
      longitudeDelta: LongitudeDelta,
    });
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
