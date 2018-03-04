import {StyleSheet} from 'react-native';
import variables from '../../../variables';

export default StyleSheet.create({
    netInfoContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: variables.darkPrimary
    },
    netInfoIcon: {
        alignSelf: 'center'
    },
    netInfoText: {
        fontFamily: 'Verdana',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    }
});