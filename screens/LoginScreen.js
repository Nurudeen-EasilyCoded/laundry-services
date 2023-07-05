import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../db/Firebase';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(!authUser){
        setLoading(false);
      }
      if(authUser) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);

  const loginUser = () => {
    if (!email || !password) {
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
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log('user', userCredentials);
          const user = userCredentials.user;
          console.log('user details', user);
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
        {loading ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <Text>Loading...</Text>
            <ActivityIndicator
              size='large'
              color='gray'
            />
          </View>
        ) : (
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
                Login
              </Text>
              <Text style={{ fontSize: 18, marginTop: 8, fontWeight: '600' }}>
                Login to your account
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
                onPress={loginUser}
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
                  Login
                </Text>
              </Pressable>
              <Pressable
                style={{ marginTop: 20 }}
                onPress={() => navigation.navigate('Register')}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    color: 'gray',
                    fontWeight: '500',
                  }}
                >
                  Dont have an account? Sign Up
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
