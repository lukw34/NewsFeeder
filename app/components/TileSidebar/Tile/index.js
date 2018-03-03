import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons'
import variables from '../../../variables';

import styles from './styles';


class Tile extends React.Component {
    state = {
        translateX: new Animated.Value(-20),
        color: new Animated.Value(0)
    };

    animationIn = Animated.parallel([Animated.timing(this.state.translateX, {
        duration: 250,
        toValue: -3
    }), Animated.timing(this.state.color, {
        duration: 250,
        toValue: 150
    })]);


    animationOut = Animated.parallel([Animated.timing(this.state.translateX, {
        duration: 250,
        toValue: -20
    }), Animated.timing(this.state.color, {
        duration: 250,
        toValue: 0
    })]);


    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isActive && this.props.isActive) {
            this.animationOut.start();
        } else if (nextProps.isActive && !this.props.isActive) {
            this.animationIn.start();
        }
    }

    _onPress() {
        const {url, onPress, isActive} = this.props;
        if (!isActive) {
            onPress(url);
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
                    underlayColor={null}>
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

Tile.propTypes = {
    onPress: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string
};

export default Tile;