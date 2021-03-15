import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Screen from './Screen'
import * as Yup from 'yup'

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms/index'
import users from '../api/users'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
    const registerApi = useApi(users.register)
    const loginApi = useApi(authApi.login)
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)
    const { logIn } = useAuth()

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)

        if (!result.ok) {
            if (result.data) {
                setIsError(true)
                setError(result.data.error)
            }
            else {
                setError("An unexpected error occured.");
                setIsError(true)
                console.log(result)
            }
            setIsError(false)
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        logIn(authToken)

    }

    return (
        <>
            <ActivityIndicator isLoading={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ email: '', name: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage visible={error} error={error} />

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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
