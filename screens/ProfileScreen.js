import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { auth } from '../db/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }}
    >
      <Pressable style={{ marginVertical: 20 }}>
        <Text>Welcome {user.email}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Sign out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
