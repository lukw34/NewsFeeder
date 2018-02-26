import React from 'react';
import {connect} from 'react-redux'

import NewsListComponent from './NewsList.component';
import ScreenWrapper from '../../components/ScreenWrapper';
import Flag from 'react-native-flags';

import {fetchTopHeadlinesForCountry} from '../../actions/fetch.actions';
import {mapCategories} from '../../utils/mapper';
import styles from './styles'

const mapStateToProps = ({request: {data, country, category}}) => ({
        items: data,
        country,
        category
    }),
    mapDispatchToProps = dispatch => ({
        fetchNews: country => dispatch(fetchTopHeadlinesForCountry(country))
    });


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(screen, config) {
        this.props.navigation.navigate(screen, config);
    }

    render() {
        const {items, style} = this.props,
            listProps = {
                style,
                items,
                navigateTo: this.navigateTo
            };

        return <NewsListComponent {...listProps} />
    }

    componentDidMount() {
        const {navigation: {state: {params: {country}}}, fetchNews} = this.props;
        fetchNews(country);
    }

}

export default ScreenWrapper(connect(mapStateToProps, mapDispatchToProps)(NewsList), {}, ({state: {params: {country: countryCode, category}}}) => ({
    headerRight: (<Flag
        style={styles.navigatorFlag}
        code={(countryCode).toUpperCase()}
        size={32}
    />),
    title: mapCategories(category).toUpperCase()
}));