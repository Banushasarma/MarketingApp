import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(value))
    } catch (error) {
        console.error(error);
    }
}

const isExpired = (item) => {
    const now = dayjs(Date.now());
    const storedTime = dayjs(Date.timestamp)
    return now.diff(storedTime, 'minute') > expiryInMinutes
}


const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value)

        if (!item) return null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value
    } catch (error) {
        console.error(error);
    }
}

export default {
    store,
    get
}