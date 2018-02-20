import {StyleSheet} from 'react-native';
import variables from '../../variables';


const styles = StyleSheet.create({
        navigatorBarBackground: {
            backgroundColor: variables.lightPrimary,
            flexDirection: 'column',
            justifyContent: 'center'
        },
        navigatorBarTitleStyle: {
            color: variables.accentColor,
            alignItems: 'center'
        },
        baseContainer: {
            flex: 1,
            flexDirection: 'column'
        },
        screenContainer: {
            flex: 1
        },
        infoContainer: {}
    }),
    gradient = {
        colors: [variables.darkPrimary, variables.primary, variables.darkAccentColor]
    };

export {
    gradient,
    styles
}