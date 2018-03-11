import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import variables from '../../variables';

class Error extends React.PureComponent {
    static propTypes = {
        navigation: {
            navigate: PropTypes.func
        }
    };

    static  defaultProps = {
        navigation: {
            navigate: () => {
            }
        }
    };

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.errorContainer}>
                <Icon
                    name='frown-o'
                    size={200}
                    style={styles.errorIcon}
                    color="white"
                />
                <Text style={styles.errorText}>{'Something went wrong'.toUpperCase()}</Text>
                <View style={styles.errorButtonContainer}>
                    <Button
                        color={variables.accentColor}
                        title='Back home page'
                        onPress={this._onPress}
                    />
                </View>
            </View>
        );
    }
}

export default ScreenWrapper(Error, {
    title: 'Application error'
});
