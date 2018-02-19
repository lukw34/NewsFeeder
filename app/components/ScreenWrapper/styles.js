import {StyleSheet} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    navigatorBarBackground: {
        backgroundColor: variables.lightPrimary
    },
    navigatorBarTitleStyle: {
        color: variables.accentColor,
        justifyContent: 'center'
    },
    baseContainer: {
        backgroundColor: variables.darkPrimary,
        flex: 1,
        flexDirection: 'column'
    },
    screenContainer: {
        flex: 1
    },
    infoContainer :{}
})