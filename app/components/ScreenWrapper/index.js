import React from 'react';
import {View} from 'react-native';
import InfoBar from './InfoBar';
import styles from './styles';

const HOCWrapper = (Screen, externalNavigationOptions) => {
    class ScreenWrapper extends React.Component {

        static navigationOptions = {
            ...externalNavigationOptions
        };

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <View style={styles.baseContainer}>
                    <Screen
                        style={styles.screenContainer}
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