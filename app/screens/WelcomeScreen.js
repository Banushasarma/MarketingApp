import React from 'react';
import { ImageBackground, StyleSheet, View, Platform, StatusBar, Image, Text } from 'react-native';

import AppButton from '../components/AppButton'
import routes from '../navigation/routes'

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/icon.png')} />
                <Text style={styles.tagline}>Sell What you Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    tagline: {
        fontSize: 30,
        fontWeight: "600",
        paddingVertical: 10
    }
})

export default WelcomeScreen;