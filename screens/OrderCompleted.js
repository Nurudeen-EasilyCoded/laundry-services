import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const OrderCompleted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LottieView
        source={require('../assets/thumbs.json')}
        style={{
          height: 350,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <View>
        <Text
          style={{
            marginTop: 40,
            fontSize: 19,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Your order has been placed
        </Text>
      </View>
      <LottieView
        source={require('../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          alignSelf: 'center',
          width: 300,
          top: 100,
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 60,
        }}
      >
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Back to homepage
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
