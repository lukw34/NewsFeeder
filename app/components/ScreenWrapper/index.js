import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import InfoBar from './InfoBar';
import styles from "./styles";
import {View} from 'react-native';

const HOCWrapper = (Screen, externalNavigationOptions, customHandler = () => ({})) => {
    class ScreenWrapper extends React.Component {

        static navigationOptions = ({navigation}) => {
            const navigator = {
                headerStyle: styles.navigatorBarBackground,
                headerTitleStyle: styles.navigatorBarTitleStyle,
                ...externalNavigationOptions,
                ...customHandler(navigation)
            };

            return {
                ...navigator,
                title: (navigator.title || '').toUpperCase()
            };
        };

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <View style={styles.baseContainer}>
                    <Screen
                        style={styles.screenContainer}
                        navigation={this.props.navigation}
                    />
                    <InfoBar
                        style={styles.infoBarContainer}
                        title="Powered by News API"
                    />
                </View>
            );
        }
    }

    return ScreenWrapper;
};


export default HOCWrapper;