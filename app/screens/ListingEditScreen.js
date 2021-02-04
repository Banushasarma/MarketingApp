import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms/index'
import Screen from './Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label("Description"),
    price: Yup.number().required().min(1).max(10000).label('Price')
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
    { label: "Cars", value: 2, backgroundColor: "green", icon: "car" },
    { label: "Cameras", value: 3, backgroundColor: "maroon", icon: "camera" },
    { label: "Games", value: 4, backgroundColor: "orange", icon: "gamepad" },
    { label: "Clothing", value: 5, backgroundColor: "purple", icon: "radio" },
    { label: "Sports", value: 6, backgroundColor: "gray", icon: "soccer" },
    { label: "Movies & Music", value: 7, backgroundColor: "brown", icon: "television" },
    { label: "Music", value: 8, backgroundColor: "navy", icon: "music" },
    { label: "Other", value: 9, backgroundColor: "coral", icon: "lock" },
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

                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />

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
