import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const HeaderCarousel = () => {
  const images = [
    'https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=',
    'https://img.freepik.com/premium-vector/washing-machine-with-basin-tshirt-soap-bubbles_24877-2749.jpg?w=740',
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circularloop
        dotcolor='#13274f'
        inactiveDotColor='#90a4ae'
        ImageComponentStyle={{ borderRadius: 6, width: '94%' }}
      />
    </View>
  );
};

export default HeaderCarousel;

const styles = StyleSheet.create({});
