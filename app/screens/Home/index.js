import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';

import CountryButton from '../../components/CountryButton';
import ScreenWrapper from '../../components/ScreenWrapper';

class Home extends React.Component {
    static countries = [
        'pl',
        'gb',
        'us'
    ];

    constructor(props) {
        super(props);

        this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton(country) {
        this.props.navigation.navigate('NewsList', {
            country
        });
    }

    render() {
        const {style} = this.props;
        return (
            <View style={[style, styles.homeScreenContainer]}>
                <Text style={styles.homeScreenTitle}>
                    {"Worldwide news".toUpperCase()}
                </Text>
                <ScrollView style={styles.homeScreenButtons}>
                    {Home.countries.map(countryCode => (<CountryButton
                        key={countryCode}
                        onPress={this._onPressButton}
                        countryCode={countryCode}
                    />))}
                </ScrollView>
            </View>
        );
    }
}

export default ScreenWrapper(Home, {
    title: 'News Feeder'
});