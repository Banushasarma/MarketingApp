import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        bottom: 20,
        borderRadius: 40,
        height: 80,
        justifyContent: "center",
        width: 80,

    }
})
export default NewListingButton;