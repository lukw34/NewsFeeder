import {StyleSheet} from 'react-native';
import variables from '../../../variables';
const size = 20;

export default StyleSheet.create({
    circle: {
        margin: 2,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: variables.text
    }
})