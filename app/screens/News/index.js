import React from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';


const News = ({navigation: {state: {params: {url: uri}}}}) => (
    <WebView
        scrollEnabled
        source={{uri}}
        javaScriptEnabled
        domStorageEnabled
    />
);

News.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                query: PropTypes.string
            })
        })
    }).isRequired
};


export default ScreenWrapper(News, {}, ({state: {params: {source: title}}}) => ({
    title
}));