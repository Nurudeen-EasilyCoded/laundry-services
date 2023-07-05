import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../db/Firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const createAccount = () => {
    if (email === '' || password === '' || phone === '') {
      Alert.alert('Empty or Invalid Details', 'Please fill all details', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { cancelable: false },
      ]);
    } else {
      createUserWithEmailAndPassword(auth, email, password, phone).then(
        (userCredentials) => {
          console.log('userCredentials', userCredentials);
          const user = userCredentials._tokenResponse.email;
          const userId = auth.currentUser.uid;

          setDoc(doc(db, 'users', `${userId}`), {
            email: user,
            phone: phone,
          });
        }
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}
          >
            <Text
              style={{ fontSize: 20, color: '#662d91', fontWeight: 'bold' }}
            >
              Register
            </Text>
            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: '600' }}>
              Create an account
            </Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View>
              <MaterialCommunityIcons
                name='email-outline'
                size={24}
                color='black'
              />
              <TextInput
                placeholder='Enter your email address'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>
            <View>
              <Feather
                name='phone'
                size={24}
                color='black'
              />
              <TextInput
                placeholder='Enter your phone number'
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>
            <View>
              <Ionicons
                name='key-outline'
                size={24}
                color='black'
              />
              <TextInput
                placeholder='Enter your password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                  width: 300,
                  marginVertical: 10,
                }}
              />
            </View>
            <Pressable
              onPress={createAccount}
              style={{
                width: 200,
                backgroundColor: 'blue',
                padding: 15,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                Register
              </Text>
            </Pressable>
            <Pressable
              style={{ marginTop: 20 }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: 'gray',
                  fontWeight: '500',
                }}
              >
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
