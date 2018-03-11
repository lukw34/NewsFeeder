import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import LoaderBalls from './LoaderBalls';
import styles from './styles';

class Loader extends React.Component {

    constructor(props) {
        super(props);
        this._mapPropsToState = this._mapPropsToState.bind(this);
        setTimeout(() => {
            this._mapPropsToState(this.props);
        });

    }

    state = {
        balls: []
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.ballsNumber !== this.state.balls.length) {
            this._mapPropsToState(nextProps);
        }
    }

    loader = [];
    break = 125;
    variation = 5;


    _mapPropsToState(props) {
        const balls = new Array(props.ballsNumber || 0).fill(this.break);
        this.setState({balls});
    }

    stopAnimation() {
        this.loader.forEach(ref => {
            ref.stopAnimation();
        });
    }

    render() {
        const {balls} = this.state,
            {ballsNumber} = this.props;
        return (
            <View style={styles.container}>
                {balls.map((delay, i) => (
                    <LoaderBalls
                        ref={loaderRef => {
                            this.loader.push(loaderRef);
                        }
                        }
                        key={`key-${i}`}
                        index={i}
                        delay={delay * i}
                        duration={delay * ballsNumber}
                        value={delay}
                        variation={this.variation}
                    />
                ))}
            </View>
        );
    }
}


Loader.propTypes = {
    ballsNumber: PropTypes.number.isRequired
};

export default Loader;