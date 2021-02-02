import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, onSelectedItem, placeholder, selectedItem, width }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={defaultStyles.colors.medium} name={icon} />}
                    {
                        selectedItem ? (
                            <AppText style={styles.text}>{selectedItem.label}</AppText>
                        ) : (
                                <AppText style={styles.placeholder}>{placeholder}</AppText>)
                    }
                    <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name="chevron-down" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItem label={item.label} onPress={() => {
                        setModalVisible(false);
                        onSelectedItem(item)
                    }} />}
                />
            </Modal>
        </>
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
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text: {
        flex: 1
    }
})
