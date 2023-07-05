import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const PickupScreen = () => {
  const deliveryTime = [
    {
      id: '0',
      name: '2-3 Days',
    },
    {
      id: '1',
      name: '3-4 Days',
    },
    {
      id: '2',
      name: '4-5 Days',
    },
    {
      id: '3',
      name: '5-6 Days',
    },
    {
      id: '4',
      name: 'Tommorrow',
    },
  ];

  const times = [
    {
      id: '0',
      time: '11:00 PM',
    },
    {
      id: '1',
      time: '12:00 PM',
    },
    {
      id: '2',
      time: '1:00 PM',
    },
    {
      id: '2',
      time: '2:00 PM',
    },
    {
      id: '4',
      time: '3:00 PM',
    },
    {
      id: '5',
      time: '4:00 PM',
    },
  ];

  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((cartItem) => cartItem.quantity * cartItem.price)
    .reduce((curr, prev) => curr + prev, 0);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);

  const navigation = useNavigation();

  const proceedToCheckout = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert('Empty or invalid field', 'Please select all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { cancelable: false },
      ]);
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace('Checkout', {
        selectedTime: selectedTime,
        no_Of_days: delivery,
        pickUpDate: selectedDate,
      });
    }
  };

  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Enter address
        </Text>
        <TextInput
          multiline
          numberOfLines={4}
          style={{
            height: 100,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 0.7,
            paddingVertical: 10,
            borderRadius: 9,
            margin: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Pickup Date
        </Text>
        <HorizontalDatepicker
          mode='gregorian'
          startDate={new Date('2023-07-01')}
          endDate={new Date('2023-07-31')}
          initialSelectedDate={new Date('2020-08-22')}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor='#222831'
          unselectedItemBackgroundColor='#ececec'
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Pickup Time
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={{
                margin: 10,
                borderRadius: 7,
                padding: 15,
                borderColor: selectedTime.includes(item.time) ? 'red' : 'gray',
                borderWidth: 0.7,
              }}
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Delivery Date
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {deliveryTime.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setDelivery(item.name)}
              style={{
                margin: 10,
                borderRadius: 7,
                padding: 15,
                borderColor: delivery.includes(item.name) ? 'red' : 'gray',
                borderWidth: 0.7,
              }}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>
      {total === 0 ? null : (
        <Pressable
          style={{
            marginTop: 'auto',
            backgroundColor: '#088f8f',
            padding: 10,
            marginBottom: 15,
            margin: 15,
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: 'white',
              }}
            >
              {cart.length} items
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: 'white',
                marginVertical: 6,
              }}
            >
              Extra charges may apply
            </Text>
          </View>
          <Pressable>
            <Text
              onPress={proceedToCheckout}
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: 'white',
              }}
            >
              Proceed to checkout
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({});
