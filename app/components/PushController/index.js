import React from 'react';
import {View, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';

class PushController extends React.Component {
    constructor(props) {
        super(props);

        this._onNotification = this._onNotification.bind(this);
    }

    componentDidMount() {
        PushNotification.configure({
            onNotification: this._onNotification
        });
    }

    _onNotification(notification) {
        console.log('Notification: ' + notification)
    }

    render() {
        return null;
    }
}

export default PushController;