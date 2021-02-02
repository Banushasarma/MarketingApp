import React from 'react'
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={defaultStyles.colors.medium} name={icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'blue',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 15
    },
    icon: {
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})
