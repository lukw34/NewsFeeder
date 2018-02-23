import {StyleSheet} from 'react-native';
import variables from '../../variables';


const styles = StyleSheet.create({
        navigatorBarBackground: {
            backgroundColor: variables.darkPrimary
        },
        navigatorBarTitleStyle: {
            color: variables.text,
            justifyContent: 'space-between',
            textAlign: 'center'
        },
        baseContainer: {
            flex: 1,
            flexDirection: 'column'
        },
        screenContainer: {
            flex: 1
        }
    }),
    gradient = {
        colors: [variables.lightPrimary, variables.primary, variables.darkPrimary]
    };

export {
    gradient,
    styles
}