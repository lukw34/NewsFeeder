import {StyleSheet} from 'react-native';
import variables from '../../../variables';

export default StyleSheet.create({
    infoModalContainer: {
        backgroundColor: variables.primaryOpacity(0.9),
        flex: 1,
        flexDirection: 'column'
    },

    infoModalContainerContent:{
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoModalContentButton: {
        marginTop: 10,
        marginBottom: 10
    },
    infoModalContentTitle: {
        marginTop: 100,
        fontSize: 18,
        padding: 20,
        textAlign: 'center',
        marginBottom: 30,
        color: variables.text
    },
    infoModalContentClose: {
        position: 'absolute',
        margin: 10,
        right: 0
    },
    infoModalContentImage: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        height: 150
    },
    infoModalContentDescription: {
        color: variables.text,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderColor: variables.divider
    }
});