import React from 'react';
import { Image, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

function ViewImageScreen(props) {
    return <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" size={40} color="white" />
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" size={40} color="white" />
        </View>
        <Image resizeMode="contain" style={styles.image} source={require('../assets/jacket.jpg')} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    closeIcon: {

        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;