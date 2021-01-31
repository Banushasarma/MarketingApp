import React from 'react'
import { StyleSheet } from 'react-native'
import Screen from './Screen'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms/index'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: '', name: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    maxLength={50}
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    maxLength={75}
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="Register" />

            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
