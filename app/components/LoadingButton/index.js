import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Loader from '../Loader';

class LoadingButton extends React.Component {
    state = {
        load: 0,
        isLoading: false,
        fadeAnim: new Animated.Value(0),
        fadeLoader: new Animated.Value(0),
        fadeText: new Animated.Value(1),
        textTransformX: new Animated.Value(0),
        loaderTransformX: new Animated.Value(150),
        ready: false,
        isLoader: false
    };

    loading = 3000;

    fadeAnimeDuration = 500;

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    _generateFadeText(toTransform, toFade) {
        return Animated.parallel([
            Animated.sequence([
                Animated.delay(250),
                Animated.timing(this.state.fadeText, {
                    duration: 500,
                    toValue: toFade
                }),
            ]),
            Animated.spring(this.state.textTransformX, {
                speed: 1,
                toValue: toTransform
            })
        ]);
    }

    _generateLoadingFade(toFade, toTransform) {
        return Animated.parallel([
            Animated.timing(this.state.fadeLoader, {
                duration: 400,
                toValue: toFade
            }),
            Animated.spring(this.state.loaderTransformX, {
                speed: 1,
                toValue: toTransform
            })
        ]);
    }

    _onPress() {
        if (this.state.ready) {
            Animated.sequence([
                Animated.parallel([
                    this._generateFadeText(-75, 0),
                    Animated.sequence([
                        Animated.delay(300),
                        this._generateLoadingFade(1, 0)
                    ])
                ])
            ]).start(() => {
                const {onPress} = this.props;
                this.timeoutPress = setTimeout(() => {
                    this.loaderRef.stopAnimation();
                    onPress();
                    this.setState({
                        isLoader: false,
                        ready: true
                    });
                    this._generateFadeText(0, 1).start();
                }, 10000)
            });

            this.setState({
                isLoader: true,
                ready: false
            });
        }
    }


    render() {
        const {title} = this.props,
            {fadeAnim, fadeText, fadeLoader, textTransformX, loaderTransformX, isLoader} = this.state,
            container = [
                styles.container, {
                    opacity: fadeAnim
                }
            ],
            titleStyle = [
                styles.title, {
                    opacity: fadeText,
                    transform: [{
                        translateX: textTransformX
                    }]
                }
            ],
            loader = [
                styles.loader, {
                    opacity: fadeLoader,
                    transform: [{
                        translateX: loaderTransformX
                    }]
                }];

        return (
            <Animated.View style={container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPress}
                >
                    {isLoader && <Animated.View style={loader}>
                        <Loader
                            ballsNumber={5}
                            ref={ref => this.loaderRef = ref}
                        />
                    </Animated.View>}
                    <Animated.Text style={titleStyle}>{title}</Animated.Text>

                </TouchableOpacity>
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: this.fadeAnimeDuration
        }).start();

        setTimeout(() => {
            this.setState({ready: true});
        }, this.fadeAnimeDuration);
    }


    componentWillUnmount() {
        if (this.timeoutPress) {
            clearTimeout(this.timeoutPress);
        }
    }
}

LoadingButton.propTypes = {
    onPress: PropTypes.func
};

export default LoadingButton;