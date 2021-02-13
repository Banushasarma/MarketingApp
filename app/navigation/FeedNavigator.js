import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listing" component={ListingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default FeedNavigator;