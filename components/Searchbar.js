import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Searchbar = () => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.8,
        borderColor: '#c0c0c0',
        borderRadius: 7
      }}
    >
      <TextInput placeholder='Search items' />
      <Feather
        name='search'
        size={24}
        color='#fd5c63'
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
