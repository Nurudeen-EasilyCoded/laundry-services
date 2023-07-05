import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {
  Header,
  HeaderCarousel,
  Products,
  Searchbar,
  Services,
} from '../components';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

const Home = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <SafeAreaView
      style={{ backgroundColor: 'cyan', flex: 1, marginBottom: 50 }}
    >
      <Header />
      <Searchbar />
      <ScrollView>
        <HeaderCarousel />
        <Services />
        <Products />
      </ScrollView>
      <Cart />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
