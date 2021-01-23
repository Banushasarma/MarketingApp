import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  // return <WelcomeScreen />
  return <ViewImageScreen />
  // return <ListingDetailsScreen />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
