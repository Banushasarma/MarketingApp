import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms/index'
import Screen from './Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label("Description"),
    price: Yup.number().required().min(1).max(10000).label('Price')
})

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
]

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', category: null, description: '', price: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />

                <AppFormField
                    maxLength={8}  ////10000.99
                    keyboardType="numeric"
                    name="price"
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker items={categories} name="category" placeholder="Category" width="50%" />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />

                <SubmitButton title="POST" />
            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
