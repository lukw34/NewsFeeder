import {AsyncStorage} from 'react-native';

const setStorageValue = async (key, value) => {
    await AsyncStorage.setItem(key, value);
}, getStorageValue = async (key) => await AsyncStorage.getItem(key);

export default {
    setItem: setStorageValue,
    setJSONItem: (key, value) => setStorageValue(key, JSON.stringify(value)),
    getItem: getStorageValue,
    getJSONItem: async key => {
        const value = await getStorageValue(key);
        if(value !== null) {
            return await JSON.parse(value);
        }

        return await null;
    }
}