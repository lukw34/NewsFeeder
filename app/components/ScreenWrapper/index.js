import React from 'react';
import {View, Button} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import InfoBar from './InfoBar';
import {styles, gradient} from "./styles";

const HOCWrapper = (Screen, externalNavigationOptions) => {
    class ScreenWrapper extends React.Component {

        static navigationOptions = {
            headerStyle: styles.navigatorBarBackground,
            headerTitleStyle: styles.navigatorBarTitleStyle,
            ...externalNavigationOptions
        };

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <LinearGradient {...gradient} style={styles.baseContainer}>
                    <Screen
                        style={styles.screenContainer}
                        navigation={this.props.navigation}
                    />
                    <InfoBar
                        style={styles.infoBarContainer}
                        title="Powered by News API"
                    />
                </LinearGradient>
            );
        }
    }

    return ScreenWrapper;
};


export default HOCWrapper;