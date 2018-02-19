import React from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';

import {styles as commonStyle, fullHeight} from './styles';

class InfoBar extends React.Component {
    state = {
        translateY: new Animated.Value(0)
    };

    animation = Animated.timing(this.state.translateY, {
        duration: 250,
        toValue: fullHeight
    });

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.animation.start();
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