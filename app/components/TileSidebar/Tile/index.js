import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import variables from '../../../variables';

import styles from './styles';


class Tile extends React.PureComponent {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        isActive: PropTypes.bool,
        icon: PropTypes.string,
        url: PropTypes.string
    };

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    state = {
        translateX: new Animated.Value(-20),
        color: new Animated.Value(0)
    };

    componentWillReceiveProps({isActive: newIsActive}) {
        const {isActive} = this.props;
        if (!newIsActive && isActive) {
            Animated.parallel([Animated.timing(this.state.translateX, {
                duration: 2000,
                toValue: -20
            }), Animated.timing(this.state.color, {
                duration: 250,
                toValue: 0
            })]).start();
        } else if (newIsActive && !isActive) {
            Animated.parallel([Animated.timing(this.state.translateX, {
                duration: 1000,
                toValue: -3
            }), Animated.timing(this.state.color, {
                duration: 250,
                toValue: 150
            })]).start();
        }
    }

    _onPress() {
        const {url, onPress, isActive} = this.props;
        if (!isActive) {
            onPress(url).then(() => {
                Animated.parallel([Animated.timing(this.state.translateX, {
                    duration: 1000,
                    toValue: -3
                }), Animated.timing(this.state.color, {
                    duration: 250,
                    toValue: 150
                })]).start();
            });
        }
    }

    render() {
        const {icon} = this.props,
            {translateX, color} = this.state,
            interpolateColor = color.interpolate({
                inputRange: [0, 150],
                outputRange: [variables.darkPrimary, variables.lightPrimary]
            }),
            animatedStyles = {
                transform: [{
                    translateX
                }],
                backgroundColor: interpolateColor
            };

        return (
            <Animated.View style={[animatedStyles, styles.tileContainer]}>
                <TouchableHighlight
                    style={styles.tileButton}
                    onPress={this._onPress}
                    underlayColor={null}
                >
                    <Icon
                        style={styles.tileIcon}
                        name={icon}
                        size={30}
                        color={variables.accentColor}
                    />
                </TouchableHighlight>
            </Animated.View>
        );
    }
}

export default Tile;