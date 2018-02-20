import {StyleSheet} from 'react-native';
import variables from '../../variables';

export default StyleSheet.create({
    countryButtonContainer: {
        height: 55,
        width: 300,
        marginBottom: 15,
        borderColor: variables.divider,
        borderWidth: 3,
        backgroundColor: variables.accentColor,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    countryButtonInsideContainer: {
        flexDirection: 'row'
    },
    countryButtonFlag: {
        flexDirection: 'row',
        marginLeft: 10
    },
    countryButtonText: {
        marginLeft: 20,
        color: variables.text,
        fontSize: 17,
        fontWeight: '600'
    }

})