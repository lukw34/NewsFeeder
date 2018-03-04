import {StyleSheet} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    searchButtonView: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchButtonContainer: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 30,
        borderColor: variables.divider,
        borderWidth: 3,
        backgroundColor: variables.accentColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButtonIcon: {
        justifyContent: 'center'
    },
    searchButtonChildren: {
        backgroundColor: variables.lightPrimary,
        borderColor: variables.accentColor,
        borderWidth: 2,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 25
    }
})