import React from 'react';
import {View, Animated, ActivityIndicator} from 'react-native';

import styles from './styles';
import variables from '../../variables';

const withLoader = (ComponentToLoad, externalProps) => class WithLoader extends React.Component {
    constructor(props) {
        super(props);
        this.onLoadStart = this.onLoadStart.bind(this);
        this.onLoadEnd = this.onLoadEnd.bind(this);
    }

    state = {
        isReady: true,
        fadeAnim: new Animated.Value(0)
    };

    onLoadStart() {
        this.setState({
            isReady: false
        });
    }

    onLoadEnd() {
        setTimeout(() => {
            this.setState({
                isReady: true
            });

            Animated.timing(this.state.fadeAnim, {
                toValue: 1,
                duration: 500
            }).start();
        }, 10);
    }

    render() {
        const {isReady, fadeAnim} = this.state,
            style = {opacity: fadeAnim},
            componentProps = {
                ...externalProps,
                onLoadStart: this.onLoadStart,
                onLoadEnd: this.onLoadEnd
            };

        return (
            <View style={styles.loaderHOCContainer}>
                {!isReady && <ActivityIndicator
                    style={styles.loaderHOC}
                    size="large"
                    color={variables.text}
                />}

                <Animated.View
                    style={style}
                >
                    <ComponentToLoad
                        {...componentProps}
                    />
                </Animated.View>
            </View>
        );
    }
};


export default withLoader;

