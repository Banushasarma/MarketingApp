import React from 'react'
import { Alert, Keyboard, StyleSheet, View } from 'react-native'
import * as Notifications from 'expo-notifications';

import messagesApi from '../api/messages'
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms/index'

function ContactSellerForm({ listing }) {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });


    const showNotification = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Awesome..!',
                body: "Your message sent to seller.",
            },
            trigger: null,
        });
    }

    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss()

        const result = await messagesApi.send(message, listing.id);
        console.log(result)
        if (!result.ok) {
            console.error("Error", result);
            return Alert.alert('Error', 'Could not send a message to seller')
        }

        resetForm()
        showNotification()
    }

    return (
        <View style={styles.container}>
            <AppForm
                onSubmit={handleSubmit}
                initialValues={{ 'message': '' }}

            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='email'
                    name='message'
                    placeholder='Type your message here'
                />
                <SubmitButton title='Contact Seller' />
            </AppForm>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})
export default ContactSellerForm;