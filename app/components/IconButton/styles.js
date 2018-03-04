import {StyleSheet} from 'react-native';
import variables from '../../variables';

export default StyleSheet.create({
    iconButton: {
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: variables.accentColor,
        borderColor: variables.accentColor,
        borderBottomWidth: 0,
        width: 250,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: 35
    },
    iconButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconButtonContainerTitle: {
        color: variables.text,
        textAlign: 'center',
        marginRight: 35,
        fontSize: 15,
        fontWeight: '700'
    },
    iconButtonContainerIcon: {
        justifyContent: 'flex-end'
    }
})