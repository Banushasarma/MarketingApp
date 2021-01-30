import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'

import AppTextInput from '../components/AppTextInput'
import Screen from '../screens/Screen'

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>


        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },

})
