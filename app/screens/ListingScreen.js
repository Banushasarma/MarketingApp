import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../screens/Screen'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'



export default function ListingScreen({ navigation }) {
    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, [])


    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>We could not get listings. Please try again</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>}
            <ActivityIndicator isLoading={loading} />
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
