import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incremementQuantity,
} from '../Redux/CartReducer';
import { decrementQty, incrementQty } from '../Redux/ProductReducer';

const DressItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(product)); //cart
    dispatch(incrementQty(product)); //product
  };

  return (
    <View>
      <Pressable
        style={{
          backgroundColor: '#f8f8f8',
          borderRadius: 8,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: product.image }}
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: '500',
              marginBottom: 7,
            }}
          >
            {product.name}
          </Text>
          <Text style={{ width: 63, fontSize: 15, color: 'gray' }}>
            ${product.price}
          </Text>
        </View>

        {cart.some((c) => c.id === product.id) ? (
          <Pressable
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQuantity(product)); // cart
                dispatch(decrementQty(product)); // product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: '#BEBEBE',
                backgroundColor: '#E0E0E0',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#088F8F',
                  paddingHorizontal: 6,
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: '#088F8F',
                  paddingHorizontal: 8,
                  fontWeight: '600',
                }}
              >
                {product.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(incremementQuantity(product)); // cart
                dispatch(incrementQty(product)); //product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: '#BEBEBE',
                backgroundColor: '#E0E0E0',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#088F8F',
                  paddingHorizontal: 6,
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable
            onPress={addItemToCart}
            style={{ width: 80 }}
          >
            <Text
              style={{
                borderRadius: 4,
                borderColor: 'gray',
                borderWidth: 0.8,
                color: '#088f8f',
                textAlign: 'center',
                padding: 5,
                fontSize: 17,
                fontWeight: 'bold',
              }}
            >
              Add
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;
