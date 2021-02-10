import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/screens/Screen';
import AppButton from './app/components/AppButton';


const Link = () => {
  const navigation = useNavigation();
  return (
    <AppButton title="Click" onPress={() => navigation.navigate("Tweets")} />
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <AppButton title="Tweeit Details" onPress={() => navigation.navigate("TweetDetails", { id: 1, title: "Tweet Details Screen" })} />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails{route.params.id}</Text>
  </Screen>
)


const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "tomato" } }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={{ title: "Tweet Details" }} ///////////////Hard Coded title
      options={{
        headerStyle: {
          backgroundColor: "dodgerblue"
        },
        headerTintColor: "white"
      }}
    />
  </Stack.Navigator>
)

const AccountNavigator = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "blue",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }}
    />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

