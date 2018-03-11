import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import Flag from 'react-native-flags';
import LinearGradient from 'react-native-linear-gradient';

import variables from '../../variables';
import {styles, gradient} from './styles';
import {mapCountries} from '../../utils/mapper';

class CountryButton extends React.PureComponent {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        countryCode: PropTypes.string.isRequired
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
            <LinearGradient {...gradient} style={styles.countryButtonGradient}>
                <TouchableHighlight
                    style={styles.countryButtonContainer}
                    onPress={this._onPress}
                    underlayColor={variables.lightPrimary}
                >
                    <View
                        style={styles.countryButtonInsideContainer}
                    >
                        <Flag
                            style={styles.countryButtonFlag}
                            code={countryCode.toUpperCase()}
                            size={32}
                        />
                        <Text
                            style={styles.countryButtonText}
                        >
                            News from {mapCountries(countryCode)}
                        </Text>
                    </View>

                </TouchableHighlight>
            </LinearGradient>
        );
    }
}

export default CountryButton;