import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Image } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'We are loading your location'
  );
  const [locationEnabled, setLocationEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location services no enabled',
        'Please enable the location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
          { cancelable: false },
        ]
      );
    } else {
      setLocationEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Allow the app to use the location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <MaterialIcons
        name='location-on'
        size={30}
        color='#fd5c63'
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
        <Text>{displayCurrentAddress}</Text>
      </View>

      <Pressable
        style={{ marginLeft: 'auto', marginRight: 7 }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{ uri: 'https://nurudeen.it/assets/nurex-586b63f8.jpg' }}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
