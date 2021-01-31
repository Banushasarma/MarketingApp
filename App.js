import React from 'react';
import { StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';

import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  return (
    <ListingEditScreen></ListingEditScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
