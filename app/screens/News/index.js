import React from 'react';

import {WebView} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';


const News = ({navigation: {state: {params: {url: uri}}}}) => (
    <WebView
        scrollEnabled
        source={{uri}}
        javaScriptEnabled
        domStorageEnabled/>
);

export default ScreenWrapper(News, {}, ({state: {params: {source: title}}}) => ({
    title
}));