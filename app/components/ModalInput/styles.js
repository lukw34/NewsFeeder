import {StyleSheet} from 'react-native';
import variables from '../../variables';

export default StyleSheet.create({
    modalContainer: {
        backgroundColor: variables.primaryOpacity(0.6),
        flex: 1,
        justifyContent: 'center'
    },
    innerContainer: {
        marginHorizontal: 20,
        backgroundColor: variables.darkPrimary,
        opacity: 1
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        color: variables.text,
        width: 100,
        height: 30,
        fontSize: 20,
        fontWeight: 'bold'
    }
});