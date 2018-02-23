import {StyleSheet} from 'react-native';
import variables from '../../variables';


export default StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70
    },
    homeScreenTitle: {
        flex: 0.2,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginTop: 25,
        fontSize: 25,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '700',
        color: variables.primaryText,
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowColor: variables.primary,
        textShadowRadius: 4
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