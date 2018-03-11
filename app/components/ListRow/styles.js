import {StyleSheet} from 'react-native';
import variables from '../../variables';

export default StyleSheet.create({
    listRowContainerButton: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 10,
    },
    listRowContainer: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: variables.divider,
        padding: 20,
        backgroundColor: variables.lightPrimary,
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 100,
        minWidth: 300,
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 6},
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    listRowContainerText: {
        fontFamily: 'Verdana',
        color: variables.primaryText,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10
    },
    listRowContainerSource: {
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: variables.darkAccentColor,
        color: variables.primaryText,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '800',
        padding: 5,
        marginBottom: 10,
        minWidth: 150
    }
});