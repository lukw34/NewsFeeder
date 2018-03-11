import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class SearchButton extends React.PureComponent {
    static propTypes = {
        children: PropTypes.element
    };

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    state = {
        translateY: new Animated.Value(500),
        isOpen: false
    };

    _onPress() {
        const {isOpen} = this.state;
        this.setState({
            isOpen: !isOpen
        }, () => {
            if (this.state.isOpen) {
                Animated.timing(this.state.translateY, {
                    toValue: 0,
                    duration: 750
                }).start();
            } else {
                Animated.timing(this.state.translateY, {
                    toValue: 500,
                    duration: 750
                }).start();
            }
        });
    }

    render() {
        const {children} = this.props,
            {translateY} = this.state,
            animatedStyle = {
                transform: [{
                    translateY
                }]
            };
        return (
            <View style={styles.searchButtonView}>
                <Animated.View style={[styles.searchButtonChildren, animatedStyle]}>
                    {children}
                </Animated.View>
                <TouchableOpacity
                    onPress={this._onPress}
                    style={styles.searchButtonContainer}
                >
                    <Icon
                        style={styles.searchButtonIcon}
                        color='#FFF'
                        size={40}
                        name="search"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchButton;