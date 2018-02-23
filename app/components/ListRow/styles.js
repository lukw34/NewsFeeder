import {StyleSheet} from 'react-native';
import variables from '../../variables';

const styles = StyleSheet.create({
        listRowContainer: {
            paddingLeft: 20,
            paddingRight: 20,
            borderTopWidth: 2,
            paddingBottom: 15,
            borderColor: variables.divider,
            backgroundColor: variables.darkPrimary,
            flexDirection: 'column',
            alignItems: 'center'
        },
        listRowContainerText: {
            color: variables.primaryText,
            textAlign: 'center',
            textShadowOffset: {
                width: 3,
                height: 3
            },
            fontSize: 17,
            fontWeight: '800',
            marginBottom: 10,
            textShadowColor: variables.text,
            textShadowRadius: 2
        }
    }),
    gradient = {
        colors: [variables.lightPrimary, variables.primary, variables.darkPrimary]
    };

export {
    styles,
    gradient
}