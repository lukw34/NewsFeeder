import {StyleSheet} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    navigatorBarBackground: {
        backgroundColor: variables.darkPrimary,
        borderBottomWidth: 4,
        borderColor: variables.divider
    },
    navigatorBarTitleStyle: {
        color: variables.text,
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    baseContainer: {
        backgroundColor: variables.primary,
        flex: 1,
        flexDirection: 'column'
    },
    screenContainer: {
        flex: 1
    }
});