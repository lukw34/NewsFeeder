import React from 'react';
import {View, Text, Button, WebView, ScrollView} from 'react-native';

class Home extends React.Component {
    state = {
        url: ''
    };

    handlePress(url) {
        this.setState({url});
    }


    render() {
        return (
            <View>
                <ScrollView style={{
                    borderTopWidth: 20,
                    borderColor: '#00FF00',
                    height: 100
                }}>
                    <WebView
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            borderTopWidth: 20,
                            borderColor: '#00FF00'
                        }}
                        source={{uri: 'https://google.com'}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}/>
                </ScrollView>
                <Text>asdasdasdas</Text>
            </View>

        )
    }
}

export default Home;