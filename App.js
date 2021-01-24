import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/screens/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  // return <WelcomeScreen />
  // return <ViewImageScreen />
  // return <ListingDetailsScreen />
  // return <MessagesScreen />

  // return <Screen>
  //   <ListItem title="My title" ImageComponent={<Icon name="email" />} />
  // </Screen>
  // return <AccountScreen />
  return <ListingScreen />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
