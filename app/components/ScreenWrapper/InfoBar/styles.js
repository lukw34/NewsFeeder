import {StyleSheet} from 'react-native';
import variables from '../../../variables';

const marginHorizontal = 20,
    height = 40,
    marginBottom = 7,
    fullHeight = height + marginBottom,

    styles = StyleSheet.create({
            infoBarContainer: {
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderColor: variables.divider,
                position: 'absolute',
                left: 0,
                marginLeft: marginHorizontal,
                marginRight: marginHorizontal,
                marginBottom,
                right: 0,
                bottom: 0,
                flexDirection: 'row',
                height,
                justifyContent: 'center',
                alignItems: 'center',
            },
            infoBarTitleContainer: {
                justifyContent: 'center'
            },
            infoBarTitle: {
                textShadowOffset: {
                    width: 2,
                    height: 2
                },
                textShadowColor: variables.primary,
                textShadowRadius: 1
            }
        }
    );

export {
    styles,
    fullHeight
}

