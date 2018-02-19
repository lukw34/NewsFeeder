import React from 'react';
import {StackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import variables from '../../variables';

import scenesConf from '../../screens';

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this._parseScenes = this._parseScenes.bind(this);
        this.navigator = {};
        this.initialRoute = {};
        this._parseScenes();
    }

    _parseScenes() {
        const {scenes = []} = this.props;
        scenes.forEach(sceneName => {
            const sceneElement = scenesConf[sceneName];
            if (sceneElement) {
                const {name, screen} = sceneElement;
                this.navigator[name] = {screen};
            }

        });

        if (scenes.length > 0) {
            this.initialRoute = {
                initialRouteName: scenes[0].name
            };
        }
    }

    render() {
        const Router = StackNavigator(this.navigator, this.initialRoute);
        return <Router />
    }
}

Navigator.propTypes = {
    scenes: PropTypes.arrayOf(PropTypes.string)
};

export default Navigator;