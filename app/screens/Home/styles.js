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
    homeScreenTitle: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 10,
        fontSize: 27,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '700',
        borderBottomWidth: 4,
        borderColor: variables.divider,
        color: variables.primaryText,
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowColor: variables.divider,
        textShadowRadius: 4
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