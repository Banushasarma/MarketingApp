import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import expoPushTokensApi from '../api/expoPushTokens'
import navigation from '../navigation/rootNavigation'
import { Platform } from 'react-native';

export default useNotifications = (notificationListner) => {
    useEffect(() => {
        registerForPushNotifications()
        if (notificationListner)
            Notifications.addNotificationReceivedListener(notificationListner)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync()
            console.log(token)
            expoPushTokensApi.register(token)
        } catch (error) {
            console.error('Error in get push token', error);
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('Banu-Msg', {
                name: 'Banu-Msg',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    }

}