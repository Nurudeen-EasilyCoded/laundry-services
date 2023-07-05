import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((cartItem) => cartItem.quantity * cartItem.price)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <>
      {total === 0 ? null : (
        <Pressable
          style={{
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
            onPress={() => navigation.navigate('Pickup')}
              style={{ 
                fontSize: 17, 
                fontWeight: '600', 
                color: 'white' 
              }}
            >
              Proceed
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
