import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import HomeComponent from './Home.component';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';

class Home extends React.Component {
    static countries = [
        'pl',
        'gb',
        'us',
        'de',
        'it',
        'ru',
        'jp',
        'ua'
    ];

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        }).isRequired,
        style: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.onPressCountryButton = this.onPressCountryButton.bind(this);
        this.onSearchPress = this.onSearchPress.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
    }

    state = {
        inputValue: ''
    };

    onPressCountryButton(country) {
        this.props.navigation.navigate('NewsList', {
            country
        });
    }

    onInputValueChange(value) {
        this.setState({
            inputValue: value
        });
    }

    onSearchPress() {
        const {inputValue: query} = this.state;
        this.props.navigation.navigate('SearchNewsList', {
            query
        });
    }

    render() {
        const {style} = this.props,
            {inputValue} = this.state,
            componentProps = {
                style,
                countries: Home.countries,
                onPressCountryButton: this.onPressCountryButton,
                onSearchPress: this.onSearchPress,
                inputValue,
                onInputValueChange: this.onInputValueChange

            };
        return (<HomeComponent {...componentProps} />);
    }
}

export default ScreenWrapper(Home, {
    title: 'News Feeder',
    headerLeft: (<Icon
        name="globe"
        size={35}
        style={styles.homeScreenNavigator}
        color="#FFF"
    />)

});