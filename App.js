import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';

import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/screens/Screen';


export default function App() {
  return (
    <ListingEditScreen />
    // <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
