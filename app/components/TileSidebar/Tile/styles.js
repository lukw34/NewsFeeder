import {StyleSheet} from 'react-native';
import variables from '../../../variables';

export default  StyleSheet.create({
    tileContainer: {
        marginBottom: 5,
        borderRadius: 5,

        borderColor: variables.divider,
        borderWidth: 1,
        elevation: 1
    },
    tileButton: {
        width: 70,
        height: 60,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    tileIcon: {
        justifyContent: 'center'
    }
});