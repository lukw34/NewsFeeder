import {StyleSheet} from 'react-native';
import variables from '../../variables';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.accentColor,
        height: 55,
        borderRadius: 3
    },
    title: {
        position: 'absolute',
        fontSize: 22, 
        color: 'white'
    },
    loader: {
        position: 'absolute'
    }
});