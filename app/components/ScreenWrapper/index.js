import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import InfoBar from './InfoBar';
import styles from "./styles";

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

        static propTypes = {
            navigation: PropTypes.shape({})
        };

        static defaultProps = {
            navigation: {}
        };

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