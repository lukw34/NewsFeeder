import React from 'react';
import {NetInfo} from 'react-native';

const withNetInfo = ComponentToLoad => class WithNetInfo extends React.Component {
    constructor(props) {
        super(props);
        this._handleNetStatusChange = this._handleNetStatusChange.bind(this);
        this._checkConnectivity = this._checkConnectivity.bind(this);
    }

    state = {
        isInternetAvailable: true
    };

    componentDidMount() {
        this._checkConnectivity();
        NetInfo.addEventListener(
            'connectionChange',
            this._handleNetStatusChange
        );
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            this._handleNetStatusChange
        );
    }


    _checkConnectivity() {
        NetInfo.isConnected.fetch().then(isInternetAvailable => {
            this.setState({
                isInternetAvailable,
            });
        }).catch(() => {
            this.setState({
                isInternetAvailable: false,
            });
        });
    }

    _handleNetStatusChange() {
        this._checkConnectivity();
    }

    render() {
        const {isInternetAvailable} = this.state,
            props = {
                isInternetAvailable
            };

        return (
            <ComponentToLoad {...props} />
        );
    }
};


export default withNetInfo;

