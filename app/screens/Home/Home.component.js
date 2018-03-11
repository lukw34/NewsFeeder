import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, Image} from 'react-native';
import styles from './styles';

import SearchButton from '../../components/SearchButton';
import TextInput from '../../components/Input';
import IconButton from '../../components/IconButton';
import CountryButton from '../../components/CountryButton';

const Home = ({style, countries, onPressCountryButton, onSearchPress, inputValue, onInputValueChange}) => (
    <View style={[style, styles.homeScreenContainer]}>
        <SearchButton>
            <View>
                <TextInput
                    value={inputValue}
                    onchange={onInputValueChange}
                />
                <IconButton
                    title='Search'
                    iconName='search'
                    onPress={onSearchPress}
                />
            </View>
        </SearchButton>
        <Image
            style={styles.homeScreenImage}
            source={require('../../resources/news2.jpg')}
        />
        <ScrollView style={styles.homeScreenButtons}>
            {countries.map(countryCode => (<CountryButton
                key={countryCode}
                onPress={onPressCountryButton}
                countryCode={countryCode}
            />))}
        </ScrollView>
    </View>
);

Home.propTypes = {
    style: PropTypes.number,
    countries: PropTypes.arrayOf(PropTypes.string),
    onPressCountryButton: PropTypes.func,
    onSearchPress: PropTypes.func,
    inputValue: PropTypes.string,
    onInputValueChange: PropTypes.func
};

export default Home;