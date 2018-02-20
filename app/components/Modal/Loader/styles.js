import {StyleSheet} from 'react-native';
import variables from '../../../variables';

export default StyleSheet.create({
    loaderModalContainer: {
        backgroundColor: variables.lightPrimary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderModalContent: {
        paddingTop: 20,
        height: 125,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: variables.divider
    }
});