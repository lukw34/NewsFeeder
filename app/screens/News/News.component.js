import React from 'react';
import {View, Text, Button, WebView, ScrollView} from 'react-native';
import {connect} from "react-redux";
import ScreenWrapper from "../../components/ScreenWrapper";
const News = ({uri, onLoad, onLoadStart}) => (
    <WebView
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#00FF00'
        }}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        scrollEnabled
        source={{uri}}
        javaScriptEnabled
        domStorageEnabled/>
);


export default News;



