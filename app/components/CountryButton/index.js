import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import variables from '../../variables';
import styles from './styles';
import Flag from 'react-native-flags';

class CountryButton extends React.Component {
    static countries = {
        pl: 'Poland',
        us: 'USA',
        gb: 'Great Britain'
    };


    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        const {onPress, countryCode} = this.props;
        onPress(countryCode);
    }

    render() {
        const {countryCode} = this.props;
        return (
            <TouchableHighlight
                style={styles.countryButtonContainer}
                onPress={this._onPress}
                underlayColor={variables.lightPrimary}
            >
                <View style={styles.countryButtonInsideContainer}>
                    <Flag
                        style={styles.countryButtonFlag}
                        code={countryCode.toUpperCase()}
                        size={32}
                    />
                    <Text
                        style={styles.countryButtonText}
                    >
                        News from {CountryButton.countries[countryCode]}
                    </Text>
                </View>

            </TouchableHighlight>
        );
    }
}

CountryButton.propTypes = {
    onPress: PropTypes.func,
    countryCode: PropTypes.string
};

export default CountryButton;