import React from 'react';
import {connect} from 'react-redux'

import NewsComponent from './News.component';
import ScreenWrapper from '../../components/ScreenWrapper';
import {popLoader, pushLoader} from '../../actions/loader.actions';


const mapDispatchToProps = dispatch => ({
    starLoader: () => dispatch(pushLoader()),
    stopLoader: () => dispatch(popLoader())
});


class News extends React.Component {
    state = {
        isReady: true
    };

    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onLoadStart = this.onLoadStart.bind(this);
    }

    onLoad() {
        setTimeout(() => {
            this.props.stopLoader();
        }, 250);
    }

    onLoadStart() {
        this.props.starLoader();
    }

    render() {
        const {navigation: {state: {params: {url: uri}}}} = this.props,
            newsProps = {
                uri,
                onLoad: this.onLoad,
                onLoadStart: this.onLoadStart
            };

        return (<NewsComponent {...newsProps} />);

    }
}

export default ScreenWrapper(connect(null, mapDispatchToProps)(News), {}, navigation => {

});