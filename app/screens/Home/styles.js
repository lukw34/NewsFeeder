import {StyleSheet} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 75
    },
    homeScreenTitle: {
        flex: 0.1,
        textAlign: 'center',
        padding: 10,
        marginTop: 5,
        fontSize: 20,
        fontWeight: '700',
        color: variables.text,
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowColor: variables.primary,
        textShadowRadius: 1
    },
    homeScreenButtons: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: variables.divider,
        flex: 0.9
    },
})