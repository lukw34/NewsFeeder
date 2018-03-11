import React from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import PropTypes from 'prop-types';

import {styles as commonStyle, fullHeight} from './styles';

class InfoBar extends React.Component {
    static propTypes = {
        style: PropTypes.number,
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    state = {
        translateY: new Animated.Value(0)
    };

    _onPress() {
        Animated.timing(this.state.translateY, {
            duration: 250,
            toValue: fullHeight
        }).start();
    }

    render() {
        const {style, title} = this.props,
            {translateY} = this.state,
            animatedStyles = {
                transform: [{
                    translateY
                }]
            };

        return (
            <Animated.View style={[commonStyle.infoBarContainer, style, animatedStyles]}>
                <TouchableWithoutFeedback onPress={this._onPress}>
                    <View style={commonStyle.infoBarTitleContainer}>
                        <Text style={commonStyle.infoBarTitle}>{title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
        );

    }
}

export default InfoBar;