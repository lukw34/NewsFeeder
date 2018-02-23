import React from 'react';
import {View, Text, Button, WebView, ScrollView} from 'react-native';
import {connect} from "react-redux";
import ScreenWrapper from "../../components/ScreenWrapper";

class News extends React.Component {
    constructor(props) {
        super(props);
        this._onButtonPress = this._onButtonPress.bind(this);
    }

    _onButtonPress() {
        this.props.navigation.navigate('Home');
    }

    render() {
        const {navigation: {state: {params: {url: uri, title}}}} = this.props;
        return (
            <View>
                <Text>{title}</Text>
                <ScrollView style={{
                    borderTopWidth: 20,
                    borderColor: '#FFFF00',
                    height: 400
                }}>
                    <WebView
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            borderColor: '#00FF00'
                        }}
                        source={{uri}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}/>
                </ScrollView>
                <Button
                    title="Back to home screen"
                    onPress={this._onButtonPress}
                />
            </View>

        )
    }
}

export default ScreenWrapper(News, {
    title: 'News'
});