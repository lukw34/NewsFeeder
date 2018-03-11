import {StyleSheet} from 'react-native';
import variables from '../../variables';


const styles = StyleSheet.create({
        countryButtonGradient: {
            marginBottom: 15,
            borderRadius: 5
        },
        countryButtonContainer: {
            height: 55,
            width: 300,
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
            fontFamily: 'Verdana',
            marginLeft: 20,
            marginTop: 3,
            color: variables.text,
            fontSize: 17,
            fontWeight: '600'
        }
    }),
    gradient = {
        colors: [variables.darkAccentColor, variables.accentColor, variables.darkAccentColor]
    };

export {
    gradient,
    styles
};