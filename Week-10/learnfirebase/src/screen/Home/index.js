import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../Login/reducer/action';
export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.global);
  const logCustomEvent = () => {
    analytics().logEvent('my_custom_event', {
      id: 101,
      item: 'My Product Name',
      description: ['My Product Desc 1', 'My Product Desc 2'],
    });
  };

  const signOut = () => {
    Alert.alert(
      'Sign Out',
      'Do you want to continue?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            auth()
              .signOut()
              .then(() => {
                dispatch(setUser(null));
                navigation.navigate('Login');
              });
          },
        },
      ],
      {cancelable: false},
    );
  };
  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.menuBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/map.png',
              }}
            />
            <Text style={styles.info}>Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity onPress={() => crashlytics().crash()}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/flat_round/70/000000/cow.png',
              }}
            />
            <Text style={styles.info}>Crashlytic</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity onPress={logCustomEvent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/coworking.png',
              }}
            />
            <Text style={styles.info}>Analytics</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuBox}>
          <TouchableOpacity
            onPress={async () =>
              await analytics().logEvent('basket', {
                id: 3745092,
                item: 'mens grey t-shirt',
                description: ['round neck', 'long sleeved'],
                size: 'L',
              })
            }>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/coworking.png',
              }}
            />
            <Text style={styles.info}>Analytics</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuBox}>
          <TouchableOpacity onPress={signOut}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/shutdown.png',
              }}
            />
            <Text style={styles.info}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0C1C',
  },
  menuBox: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    borderRadius: 10,
  },
  icon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
});
