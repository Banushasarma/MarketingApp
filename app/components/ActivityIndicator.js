import React from 'react'
import LottieView from 'lottie-react-native'
import { Text } from 'react-native';

function ActivityIndicator({ isLoading = false }) {
    if (!isLoading) return null;

    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/animations/done.json')}
        />
    )
}

export default ActivityIndicator