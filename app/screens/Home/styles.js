import {StyleSheet, Dimensions} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70
    },
    homeScreenImage: {
        height: 150,
        width: Dimensions.get('window').width
    },
    homeScreenButtons: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: variables.divider,
        flex: 0.9
    },
})