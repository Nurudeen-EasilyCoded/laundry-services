import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DressItem from './DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/ProductReducer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/Firebase';

const Products = () => {
  const product = useSelector((state) => state.product.product);

  const [productItem, setProductItem] = useState([]);

  const dispatch = useDispatch();

  const products = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = async () => {
      // products.map((product) => dispatch(getProducts(product)));
      const colRef = collection(db, 'types');
      const docSnapshot = await getDocs(colRef);
      docSnapshot.forEach((doc) => {
        productItem.push(doc.data());
      });
      productItem?.map((product) => dispatch(getProducts(product)));
    };

    fetchProducts();
  }, []);
  //console.log(product);
  return (
    <View>
      {product.map((product, index) => (
        <DressItem
          product={product}
          key={index}
        />
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
