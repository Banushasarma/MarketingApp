import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';


import Screen from './app/screens/Screen';
import AppButton from './app/components/AppButton';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';
import AppText from './app/components/AppText';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import logger from './app/Utility/logger'

//logger.start()

export default function App() {
  // logger.log(new Error('Error in app'))
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ 'id': 1 }))
      const value = await AsyncStorage.getItem('person')
      const person = JSON.parse(value)
      console.log(person)
    } catch (error) {
      console.error(error);
    }
  }

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return setUser(user)

  }


  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />
    )

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

